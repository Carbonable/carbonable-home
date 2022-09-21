import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Airtable from "airtable";
import { useState } from "react";
import { WhitelistButton } from "~/components/Button";

export default function WaitingList() {

    const [email, setEmail] = useState("");
    const [hasValidEmail, setHasValidEmail] = useState(true);
    const [emailSaved, setEmailSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (email === "") { return; }

        setHasValidEmail(validateEmail(email));
        setIsLoading(true);

        const base = new Airtable({ apiKey: (window as any).ENV.AIRTABLE_API_KEY }).base((window as any).ENV.AIRTABLE_USER_BASE);

        // Check if email already exists
        base('email').select({filterByFormula: `{email} = "${email}"`}).all().then(records => {
            if (records.length > 0) { 
                setEmailSaved(true);

                setTimeout(() => {
                    setEmailSaved(false);
                }, 3000);
                
                return;
            };

            // Create a new record
            base('email').create({
                email,
                "creation_date": new Date().toUTCString()
                }, function(err, record) {
                if (err) {
                    setIsLoading(false);
                    setEmailSaved(false);
                    console.error(err);
                    return;
                }

                setIsLoading(false);
                setEmailSaved(true);

                setTimeout(() => {
                    setEmailSaved(false);
                }, 3000);
            });
        })
    }

    const handleInput = (event: any) => {
        if (false === hasValidEmail) { setHasValidEmail(true); }

        setEmail(event.target.value);
      };

    function validateEmail(email: string) {
        // eslint-disable-next-line no-useless-escape
        const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return email.match(mailformat) ? true : false;
    }

    return (
        <div className="w-11/12 text-center mt-10 px-2 mx-auto md:mt-16">
            <div className="font-inter uppercase text-xl text-transparent bg-clip-text bg-green-blue md:text-2xl">Channel digital capital toward real-world change !</div>
            <div className={hasValidEmail ? 'bg-white mt-4 rounded-full w-11/12 pl-4 pr-2 py-2 mx-auto flex lg:w-6/12' : 'bg-white mt-4 rounded-full w-11/12 pl-4 pr-2 py-2 mx-auto flex lg:w-6/12 border-2 border-red-400'}>
                <input type="email" className="text-sm text-slate-500 outline-0 w-full" defaultValue={email} name="email" onChange={handleInput} placeholder="Join our waiting list" />
                <WhitelistButton className="bg-green flex items-center text-xs lg:ml-28 w-min text-right" onClick={handleClick}>
                    <PaperAirplaneIcon className={isLoading ? 'lg:hidden w-6 text-white animate-pulse' : 'lg:hidden w-6 text-white'} />
                    <div className="hidden lg:block min-w-max">Get notified</div>
                </WhitelistButton>
            </div>
            { false === hasValidEmail && 
                <div className="text-red-600 mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center">Please enter a valid email address</div>
            }
            { emailSaved && 
                <div className="text-green mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center">Thanks for joining!</div>
            }
        </div>
    )
}