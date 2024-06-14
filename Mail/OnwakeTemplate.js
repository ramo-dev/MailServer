async function generateHTML(obj) {
    // Extract data from the object
    const geoLocation = await obj.geoLocation;
    const browserInfo = await obj.browserInfo;

    // Create HTML content dynamically
    const htmlContent = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .info-box {
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin-bottom: 15px;
                }
                .info-box h2 {
                    margin-top: 0;
                    color: #333;
                }
                .info-box table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .info-box table td, .info-box table th {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <div class="info-box">
                <h2>Geolocation Information</h2>
                <table>
                    <tr><th>IP Address</th><td>${geoLocation.ip}</td></tr>
                    <tr><th>Country</th><td>${geoLocation.country_name} (${geoLocation.country_code2})</td></tr>
                    <tr><th>ISP</th><td>${geoLocation.isp}</td></tr>
                    <tr><th>Response Code</th><td>${geoLocation.response_code} - ${geoLocation.response_message}</td></tr>
                </table>
            </div>
            <div class="info-box">
                <h2>Browser Information</h2>
                <table>
                    <tr><th>Browser Name</th><td>${browserInfo.browserName}</td></tr>
                    <tr><th>Browser Version</th><td>${browserInfo.browserVersion}</td></tr>
                    <tr><th>User Agent</th><td>${browserInfo.userAgent}</td></tr>
                </table>
            </div>
        </body>
        </html>
    `;

    return htmlContent;
};


module.exports = {generateHTML};