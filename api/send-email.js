
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        name,
        companyName,
        companyWebsite,
        email,
        phoneNumber,
        productType,
        quantityPacking,
        deliveryTime,
        message
    } = req.body;

    // Basic Validation
    if (!name || !email || !phoneNumber || !productType) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: '"Vel World Enquiry" <noreply@velworld.net>', // Sender address
            replyTo: email, // Set Reply-To as the customer’s email
            to: 'team@velworld.net', // Receiver address
            subject: 'New Global Enquiry – Vel World',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0066cc; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0; text-transform: uppercase; letter-spacing: 2px;">New Global Enquiry</h2>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Received from Vel World Website</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 40%; color: #555;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Company Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${email}</td>
              </tr>
               <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Phone / WhatsApp:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Website:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${companyWebsite || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Product Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333; font-weight: bold; color: #0066cc;">${productType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Quantity & Packing:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${quantityPacking}</td>
              </tr>
               <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Delivery Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; color: #333;">${deliveryTime}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
              <h4 style="margin-top: 0; color: #0066cc;">Detailed Message:</h4>
              <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">${message || 'No additional details provided.'}</p>
            </div>
          </div>
          
          <div style="background-color: #eee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Vel World. All rights reserved.
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
