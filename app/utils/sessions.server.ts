import { createCookie } from "@remix-run/node";
import { createDatabaseSessionStorage } from "./dbsessions.server";
 
const sessionCookie = createCookie("__session", {
    httpOnly: true,
    path: "/",
    secrets: process.env.SESSIONS_SECRETS !== undefined ? [process.env.SESSIONS_SECRETS] : [""],
    sameSite: "lax",
    secure: true
});
 
const { getSession, commitSession, destroySession } =
createDatabaseSessionStorage({ cookie: sessionCookie });
 
export { getSession, commitSession, destroySession };