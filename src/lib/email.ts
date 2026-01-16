import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

// Create transporter
const createTransporter = () => {
  const email = process.env.SMTP_EMAIL;
  const password = process.env.SMTP_PASSWORD;

  if (!email || !password) {
    throw new Error('SMTP_EMAIL and SMTP_PASSWORD environment variables are required');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });
};

// Email template for contact form
const createContactEmailTemplate = (data: ContactFormData) => {
  const { fullName, email, phone, message } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - CodeBuzz</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #ff830a;
            }
            .header h1 {
                color: #ff830a;
                margin: 0;
                font-size: 24px;
            }
            .content {
                margin-bottom: 25px;
            }
            .info-section {
                background-color: #fff9f4;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #ff830a;
            }
            .info-item {
                margin: 15px 0;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            }
            .info-item:last-child {
                border-bottom: none;
            }
            .label {
                font-weight: bold;
                color: #555;
                display: block;
                margin-bottom: 5px;
            }
            .value {
                color: #333;
                font-size: 16px;
            }
            .message-box {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                margin-top: 10px;
                border: 1px solid #e0e0e0;
            }
            .message-text {
                color: #333;
                white-space: pre-wrap;
                line-height: 1.8;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p style="color: #666; margin: 10px 0 0;">CodeBuzz Website Inquiry</p>
            </div>
            
            <div class="content">
                <p>You have received a new contact form submission from the CodeBuzz website.</p>
                
                <div class="info-section">
                    <div class="info-item">
                        <span class="label">👤 Full Name:</span>
                        <span class="value">${fullName}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">📧 Email ID:</span>
                        <span class="value">${email}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">📱 Phone Number:</span>
                        <span class="value">${phone}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">💬 Message:</span>
                        <div class="message-box">
                            <p class="message-text">${message}</p>
                        </div>
                    </div>
                </div>
                
                <p style="margin-top: 20px; color: #666;">
                    Please respond to this inquiry at your earliest convenience.
                </p>
            </div>
            
            <div class="footer">
                <p><strong>This is an automated email from CodeBuzz Contact Form</strong></p>
                <p style="margin-top: 10px;">Sent on ${new Date().toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send contact form email
export const sendContactFormEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const emailFrom = process.env.SMTP_EMAIL;
    const emailTo = process.env.CONTACT_EMAIL_TO;

    if (!emailFrom || !emailTo) {
      throw new Error('SMTP_EMAIL and CONTACT_EMAIL_TO environment variables are required');
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: emailFrom,
      to: emailTo,
      subject: `New Contact Form Submission from ${data.fullName} - CodeBuzz`,
      html: createContactEmailTemplate(data),
      replyTo: data.email, // This allows replying directly to the customer
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return false;
  }
};
