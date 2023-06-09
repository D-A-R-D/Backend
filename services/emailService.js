const nodemailer = require('nodemailer');

async function sendMail({
    from,
    to,
    subject,
    text,
    html
}) {
    let transpoter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        // auth: {
        //     user: process.env.SMTP_LOGIN,
        //     pass: process.env.SMTP_PASSWORD
        // }

    })
    let info = await transpoter.sendMail({
        from: `JoyShare<${from}>`,
        to,
        subject,
        text,
        html
    })
    console.log(info);
}
module.exports = sendMail;