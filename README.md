# Custom Mail Server

A custom mail server built using Node.js, Express, and Nodemailer for sending emails from your web application.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ramo-dev/MailServer.git
    cd MailServer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project and add the following environment variables with your credentials:

    ```env
    MAIL_PASS="your_app_password"
    MAIL_NAME="your_primary_email@gmail.com"
    MAIL_NAME_FROM="your_custom_domain_email@yourdomain.com"
    PORT=your_port_number
    ```

    Replace the placeholders with your actual email credentials and desired port number.

2. Ensure 2-Step Verification is enabled on your Google account and generate an App Password. Use this app password for `MAIL_PASS`.

    - Go to your [Google Account Security settings](https://myaccount.google.com/security).
    - Under "Signing in to Google," select "App passwords."
    - Follow the instructions to generate an app password and use it in the `.env` file.

## Usage

1. Start the server:

    ```bash
    npm run start
    ```

2. The server will run on the port specified in the `.env` file (default is 3000).

3. You can now send POST requests to the server to send emails. Example using `curl`:

    ```bash
    curl -X POST http://localhost:3000/ \
         -H "Content-Type: application/json" \
         -d '{
               "fullName": "Your Name",
               "email": "recipient@example.com",
               "message": "Hello, this is a test email sent from my custom mail server."
             }'
    ```

## Dependencies

- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [email-validator](https://www.npmjs.com/package/email-validator)
- [express](https://www.npmjs.com/package/express)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [nodemon](https://www.npmjs.com/package/nodemon)

## License

This project is licensed under the ISC License.


