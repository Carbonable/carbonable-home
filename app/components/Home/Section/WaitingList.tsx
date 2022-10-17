import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Airtable from "airtable";
import { useState } from "react";
import { WhitelistButton } from "~/components/Button";
import { PlusIconBlack } from "~/components/Icons/PlusIcon";
import { validateEmail } from "~/utils/utils";



export default function WaitingList() {

    const [email, setEmail] = useState("");
    const [hasValidEmail, setHasValidEmail] = useState(true);
    const [emailSaved, setEmailSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (email === "") { return; }

        if (false === validateEmail(email)) { 
            setHasValidEmail(false);
            return; 
        }

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

    return (
        <>
            <div className="bg-waiting-list bg-no-repeat bg-bottom bg-origin-padding rounded-2xl w-11/12 mx-auto py-2 px-2 mt-12 text-black md:w-10/12 md:px-12 xl:w-8/12">
                <div className="flex items-center justify-center mt-10">
                    <PlusIconBlack className="w-8 md:w-12"></PlusIconBlack>
                    <div className="w-10/12 mx-auto px-6 uppercase text-center">
                        <h1 className="uppercase font-trash font-bold text-2xl text-center md:text-3xl xl:text-5xl">
                            HELP NATURE
                            <div className="font-americana font-medium text-xl text-center md:text-2xl xl:text-4xl">HELP YOU</div>
                        </h1>
                    </div>
                    <PlusIconBlack className="w-8 md:w-12"></PlusIconBlack>
                </div>
                <div className="my-10">
                    <img className="mx-auto" src="/assets/images/home/infinite-earth.svg" alt="Infinite earth" />
                </div>
                <div className="w-full font-inter text-lg text-center px-4 mx-auto md:px-12 md:w-6/12">At Carbonable, we’re on a mission to align the best interests of business, investors & the planet.</div>
                <div className="w-full text-center my-10 mx-auto md:mt-16 md:w-10/12">
                    <div className={hasValidEmail ? 'bg-white mt-4 rounded-full w-full pl-4 pr-2 py-2 mx-auto flex lg:w-10/12 xl:w-6/12' : 'bg-white mt-4 rounded-full w-11/12 pl-4 pr-2 py-2 mx-auto flex lg:w-10/12 xl:w-6/12 border-2 border-red-400'}>
                        <input type="email" className="text-sm text-slate-500 outline-0 w-full" defaultValue={email} name="email" onChange={handleInput} placeholder="Join our waiting list" />
                        <WhitelistButton className="bg-green flex items-center text-xs lg:ml-28 w-min text-right" onClick={handleClick}>
                            <PaperAirplaneIcon className={isLoading ? 'lg:hidden w-6 text-white animate-pulse' : 'lg:hidden w-6 text-white'} />
                            <div className="hidden uppercase lg:block min-w-max">Join our waitlist</div>
                        </WhitelistButton>
                    </div>
                    { false === hasValidEmail && 
                        <div className="text-red-600 mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center">Please enter a valid email address</div>
                    }
                    { emailSaved && 
                        <div className="text-green mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center">Thanks for joining!</div>
                    }
                </div>
            </div>
        </>
        
    )
}