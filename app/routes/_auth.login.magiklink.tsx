import { json, type ActionArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { sendMagikLink } from "~/utils/magikLink.server";
import { validateEmail } from "~/utils/utils";
import bcrypt from "bcryptjs";

/**
 * Create a magik link and send it to the user's email address
 * 
 * @param { ActionArgs } request
 * @returns { json } Returns a json containing either the error message or the success message
 */
export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    const email = formData.get("email");

    // Check if the email is valid
    if (!email || !validateEmail(email.toString())) return json({error: "Please enter a valid email address"}, {status: 400});

    // Check if the email is already in the database and if it is not verified
    const hashedEmail = bcrypt.hashSync(email.toString(), process.env.HASH_SECRET);
    
    const result = await db.magikLink.findFirst({
        where: {
            email: hashedEmail,
            isVerified: false
        }
    });

    // If it is, update the magik link and send it again
    if (result) {
        await db.magikLink.update({
            where: {
                id: result.id
            },
            data: {
                isVerified: true
            }
        })
    }

    // Check if the email is part of authorized emails
    const authorizedDomains = await db.authorizedDomain.count({
        where: {
            id: email.toString().split("@")[1]
        }
    });

    if (authorizedDomains === 0) return json({error: "This email address is not authorized to access this application"}, {status: 400});

    // Send the magik link
    return await sendMagikLink({request, email: email.toString()});
 }