import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';
import { json } from '@remix-run/node';


export async function sendEmail({email, accessLink}: {email: string, accessLink: string}) {
    if (process.env.MAILJS_SERVICE_ID === undefined || process.env.MAILJS_TEMPLATE_ID === undefined || process.env.MAILJS_PUBLIC_KEY === undefined || process.env.MAILJS_PRIVATE_KEY === undefined) {
        return;
    }

    const templateParams = {
        to_email: email,
        access_link: accessLink,
    };
    try {
        await emailjs.send(
        process.env.MAILJS_SERVICE_ID,
        process.env.MAILJS_TEMPLATE_ID,
        templateParams,
        {
            publicKey: process.env.MAILJS_PUBLIC_KEY,
            privateKey: process.env.MAILJS_PRIVATE_KEY, // optional, highly recommended for security reasons
        },
        );
        return json({success: "Email sent"}, {status: 200})
    } catch (err) {
        if (err instanceof EmailJSResponseStatus) {
            return json({error: err.text}, {status: err.status})
        }
    }
}