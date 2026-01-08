import { Zap, Bot, Atom, Settings, Brain, Database } from "lucide-react";
import HeroCard from "./ui/HeroCard";

export default function Hero() {
    return (
        <section
            className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center px-8 md:px-16 lg:px-24"
            style={{
                background: "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
                {/* Left Content */}
                <div className="z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold font-montserrat leading-tight text-gray-900 mb-2">
                        Learn In-Demand
                        <br />
                        Tech Skills.
                    </h1>
                    <h2 className="text-5xl md:text-6xl font-extrabold font-montserrat leading-tight text-[#ff830a] mb-6">
                        Faster. Smarter. Better.
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 font-poppins max-w-lg">
                        Learn, Experiment, and Deploy with Confidence. Let's get started.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(92.57deg, #FF830A -11.84%, #FF6700 100.76%)",
                            }}
                        >
                            <Zap size={20} fill="currentColor" />
                            Get Started For Free
                        </button>
                        <button className="px-8 py-3.5 rounded-lg bg-white text-[#ff830a] font-semibold border border-[#ff830a] hover:bg-orange-50 transition-colors shadow-sm">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Content - Cards Stack */}
                <div className="relative h-[700px] w-full hidden lg:flex items-center justify-center">
                    <div className="relative w-[600px] h-[600px]">
                        {/* Card 1: AI Engineer */}
                        <HeroCard
                            icon={<Bot size={48} />}
                            title="AI Engineer"
                            subtitle="Build real systems"
                            number={1}
                            className="top-0 left-60 -translate-x-1/2 z-10"
                        />

                        {/* Card 2: Data Scientist */}
                        <HeroCard
                            icon={<Atom size={48} />}
                            title="Data Scientist"
                            subtitle="Analyse complex data"
                            number={2}
                            className="top-24 right-10 z-20"
                        />

                        {/* Card 3: AI Product Manager */}
                        <HeroCard
                            icon={<Settings size={48} />}
                            title="AI product manager"
                            subtitle="Analyze & predict"
                            number={3}
                            className="bottom-34 right-5 z-30"
                        />

                        {/* Card 4: ML Ops */}
                        <HeroCard
                            icon={<Brain size={48} />}
                            title="ML Ops"
                            subtitle="Model concepts"
                            number={4}
                            className="bottom-0 left-1/2 -translate-x-1/2 z-40"
                        />

                        {/* Card 5: Data Engineer */}
                        <HeroCard
                            icon={<Database size={48} />}
                            title="Data Engineer"
                            subtitle="Intelligence concepts"
                            number={5}
                            className="top-65 -left-8 z-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
