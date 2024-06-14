const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {generateHTML} = require("./OnwakeTemplate")

dotenv.config({path: "../.env"});


async function UserInfo(obj){
    const template = await generateHTML(obj);
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL2,
          pass: process.env.MAIL_PASS2,
        },
      });

      const mailOptionsClient = {
        from: process.env.MAIL2,
        to: process.env.MAIL_NAME_FROM,
        subject: "Thank you for Reaching Out",
        html: template,
      };
     
      

      const clientInfo = await transporter.sendMail(mailOptionsClient);
      return clientInfo.status;
}

module.exports = {UserInfo};