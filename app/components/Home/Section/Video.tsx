import { ModalVideo } from "~/components/Modal";

export default function Video() {
    return (
        <div className="block bg-home-video w-full text-center bg-no-repeat bg-cover mt-12 xl:mt-20 pb-20">
            <div className="font-inter font-bold text-xl pt-12 w-10/12 mx-auto lg:text-2xl lg:w-6/12">
                Carbonable empowers anyone to invest in the greatest challenge of our time, by financing nature’s regeneration. <br />
                <span className="text-green">Get a significant, long-term and growing yield while fighting climate change.</span>
            </div>
            <ModalVideo />
        </div>
    )
}