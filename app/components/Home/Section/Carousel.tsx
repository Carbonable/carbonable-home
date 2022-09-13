import { PlusIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 5
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3
                }
            }
          ]
    };

    const images = [
        {
            name: 'project1.jpeg'
        },
        {
            name: 'project2.jpeg'
        },
        {
            name: 'project3.jpeg'
        },
        {
            name: 'project4.jpeg'
        },
        {
            name: 'project3.jpeg'
        },
        {
            name: 'project2.jpeg'
        },

    ]
    return (
        <div className="w-11/12 mx-auto mt-12 xl:mt-24">
            <div className="flex items-center justify-center">
                <PlusIcon className="w-8"></PlusIcon>
                <div className="w-10/12 items-center uppercase font-trash text-bold text-xl text-center">FUTURE-PROOF NFT<br/>INVESTMENTS</div>
                <PlusIcon className="w-8"></PlusIcon>
            </div>
            <div className="text-center font-inter">Break free from old beliefs</div>
            <Slider {...settings} className="mt-8 xl:mt-16">
                {images.map((image, index) => (
                    <div key={`image_${index}`} className="px-2">
                        <img alt={`Carbonable project ${index}`} src={`/assets/images/home/${image.name}`} className="rounded-lg" />
                    </div>
                ))}
            </Slider>
      </div>
    )
}