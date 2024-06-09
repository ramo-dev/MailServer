function clientTemplate(fullName) {
  const clientTemp = `<body
  style="
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    padding: 20px;
  "
>
  <h1 style="color: #333; font-size: 24px; margin-bottom: 10px">
    Hello ${fullName}, 😊
  </h1>
  <p style="color: #777; font-size: 18px; margin-bottom: 20px">
    Thanks for reaching out! I've got your message and I'm super excited about your interest. I'll dive into your inquiry and get back to you ASAP. Stay awesome!
  </p>
  <p style="color: #777; font-size: 18px; margin-bottom: 20px">
    Thank you once again for contacting me. 🙌
  </p>
  <p style="color: #777; font-size: 18px; margin-bottom: 20px">
    Best regards, 😊
  </p>
  <p style="color: #777; font-size: 18px; margin-bottom: 20px">Annuar🥳</p>
</body>
`;
  return clientTemp;
}

module.exports = clientTemplate;
