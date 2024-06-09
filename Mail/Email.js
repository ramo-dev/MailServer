const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// middlewares
dotenv.config({ path: "../.env" });

// email imports
const clientTemplate = require("./client.js");
const adminTemplate = require("./admin.js");

// nodemailer setup

async function sendMail(fullName, email, message) {
  const clientMail = clientTemplate(fullName);
  const adminMail = adminTemplate(fullName, email, message);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_NAME,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptionsClient = {
    from: process.env.MAIL_NAME,
    to: email,
    subject: "Thank you for Reaching Out",
    html: clientMail,
  };

  const mailOptionsAdmin = {
    from: process.env.MAIL_NAME,
    to: process.env.MAIL_NAME,
    subject: `Message from ${fullName}`,
    html: adminMail,
  };

  try {
    const clientInfo = await transporter.sendMail(mailOptionsClient);
    console.log("Client email sent: ", clientInfo.response);

    const adminInfo = await transporter.sendMail(mailOptionsAdmin);
    console.log("Admin email sent: ", adminInfo.response);

    return { clientInfo, adminInfo };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error; 
  }
}

module.exports = { sendMail };
