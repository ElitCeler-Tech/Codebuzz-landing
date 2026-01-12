"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
}

const fadeVariants = (direction: string, distance: number): Variants => {
    const directions: Record<string, { x?: number; y?: number }> = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return {
        hidden: {
            opacity: 0,
            ...directions[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };
};

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    distance = 30,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeVariants(direction, distance)}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
}

export function StaggerItem({
    children,
    className = "",
    direction = "up",
    distance = 30,
}: StaggerItemProps) {
    return (
        <motion.div
            variants={fadeVariants(direction, distance)}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scale animation for cards on hover
export function ScaleOnHover({
    children,
    className = "",
    scale = 1.02,
}: {
    children: ReactNode;
    className?: string;
    scale?: number;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
