import { redirect, type LoaderArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { commitSession, getSession } from "~/utils/sessions.server";

export async function loader({ request }: LoaderArgs) {
    // If cookie has a userId, redirect to the home page
    const session = await getSession(request.headers.get("Cookie"));

    if (session.has("userId")) return redirect("/");
    
    // Check if the magik link exists and is not verified
    const magikLink = await db.magikLink.findFirst({
        where: {
            hash: new URL(request.url).searchParams.get("hash") || "",
            isVerified: false
        }
    });

    if (!magikLink) return redirect("/login");

    // Activate the magik link
    await db.magikLink.update({
        where: {
            id: magikLink.id
        },
        data: {
            isVerified: true
        }
    });

    // Create a session
    session.set("userId", magikLink.hash);
    const expires = new Date();
    const MAX_AGE = process.env.SESSION_EXPIRATION_IN_SECONDS !== undefined ? parseInt(process.env.SESSION_EXPIRATION_IN_SECONDS) : 10;
    expires.setSeconds(expires.getSeconds() + MAX_AGE);
    
    return redirect("/", {
        headers: {
          "Set-Cookie": await commitSession(session, {expires}),
        },
    });
}