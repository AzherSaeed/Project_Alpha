import nodemailer from 'nodemailer';
import Swal from 'sweetalert2'
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, description } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender 
      to: 'abdulmanan4066@gmail.com', // Recipient 
      subject: 'New Contact Us Form Submission',
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #007BFF;">New Contact Us Form Submission</h2>
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
        <p><strong>Phone Number:</strong> <a href="tel:${phoneNumber}" style="color: #007BFF;">${phoneNumber}</a></p>
        <p><strong>Description:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007BFF;">${description}</p>
      </div>
    `,
    };
    
    

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
