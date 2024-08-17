import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, description } = req.body;

    let transporter = nodemailer.createTransport({
      secure: true,
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'founders@alpatech.ai', // Use environment variable
        pass: 'glgbcslwdcyjtpbc', // Use environment variable
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Must be the authenticated email
      to: "founders@alpatech.ai", // Email address where you want to receive the form submissions
      subject: `${firstName} ${lastName} contact to support`,
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #007BFF;">${firstName} ${lastName} have a query</h2>
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
