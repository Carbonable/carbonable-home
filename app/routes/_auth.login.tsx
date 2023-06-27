import type { LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSession } from "~/utils/sessions.server";

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    
    if (session.has("userId")) return redirect("/");
    return json({});
}
  

export default function Login() {
    const magikLinkFetcher = useFetcher();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(magikLinkFetcher.state === "loading" || magikLinkFetcher.state === "submitting");
        setIsSuccess(magikLinkFetcher.state === "idle" && magikLinkFetcher.data?.hasOwnProperty("error") === false);
        setIsError(magikLinkFetcher.state === "idle" && magikLinkFetcher.data?.hasOwnProperty("error") === true);

    }, [magikLinkFetcher]);
    return (
        <div className="w-full md:w-11/12 mx-auto flex h-[calc(100vh_-_80px)] justify-center items-center">
            <div className="text-center w-full md:w-1/2">
                <h1 className="text-3xl font-bold uppercase">Get access</h1>
                
                <magikLinkFetcher.Form method="post" action="/login/magiklink" className="mt-8 w-full">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-2 mt-1 bg-transparent focus:border-neutral-300" />
                    { isError === true && <div className="text-sm text-center text-red-800 w-full">{magikLinkFetcher.data?.error}</div>}
                    { isLoading === false && isSuccess === false &&
                        <button className="border border-neutral-700 bg-greenish-500 uppercase px-4 py-2 rounded-lg hover:bg-greenish-500/95 mt-4">Receive my access link</button> 
                    }
                    { isLoading === true && 
                        <div className="border border-neutral-700 bg-greenish-500/95 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center cursor-not-allowed">
                            <svg className="animate-spin mr-3 h-5 w-5 text-white fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending my access link...
                        </div> 
                    }
                    { isSuccess === true && 
                        <div className="border border-neutral-700 bg-greenish-500 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center">
                            Access link successfully sent!
                        </div> 
                    }
                </magikLinkFetcher.Form>
            </div>
        </div>
    )
}