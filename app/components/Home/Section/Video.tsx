import { ModalVideo } from "~/components/Modal";


export default function Video() {
    return (
        <div id="video" className="block scroll-mt-12 bg-home-video w-full text-center bg-no-repeat bg-cover mt-12 xl:mt-20 py-32 lg:py-52">
            <div className="font-inter font-bold text-xl w-10/12 max-w-screen-2xl mx-auto lg:text-2xl lg:w-6/12">
                Carbonable empowers anyone to <span className="text-green">invest in the greatest challenge of our time</span>, by financing nature’s regeneration. 
                <br/>Get a <span className="text-green">significant, long-term and growing yield</span> while fighting climate change.
            </div>
            <ModalVideo />
        </div>
    )
}