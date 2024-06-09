function adminTemplate(fullName, email, message) {
  const adminTemp = `<body
style="
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  padding: 20px;
"
>
<h1 style="color: #222; font-size: 24px; margin-bottom: 10px">
  Hello Annuar, 🧑‍💻
</h1>
<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  You have a new Message from your portfolio...
</p>

<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  Name: <strong class="client-name">${fullName}</strong>
</p>
<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  Email: <strong class="client-email">${email}</strong>
</p>

<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  Message: <strong class="client-message">${message}</strong>
</p>

<a
  href="mailto:${email}"
  style="
    background-color: #007bff;
    color: #fff;
    padding: 8px 18px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 17px;
  "
  >Contact via Email</a
>
<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  Best regards, Bro
</p>
<p style="color: #444; font-size: 18px; margin-bottom: 20px">
  Annuar's Email System 😎
</p>
</body>
`;
return adminTemp;
}


module.exports = adminTemplate;