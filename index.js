const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sendMail } = require("./Mail/Email.js");
const {UserInfo} = require("./Mail/OnWake.js")
// const {randomChars} = require("./anonymous.js");

// env variables configuration
dotenv.config();

// appserver setup
const app = express();

// json parse middlewares
app.use(express.json());
app.use(cors());

// server routes

app.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    await sendMail(fullName, email, message);
    res
      .status(200)
      .send(
        "Email sent successfully, you will receive a confirmation email shortly"
      );
  } catch (err) {
    res.status(500).send("Failed to send email");
    console.error(err);
  }
});

app.get("/wakeup", (req, res) => {
  res.status(200).send("Im up");
  console.log("waking up");
});

app.post("/sdfs",async (req, res)=>{
  const {userInfo} = req.body;
  await UserInfo(userInfo)
  res.status(200)
})

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
