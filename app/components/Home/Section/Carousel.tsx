import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Slider from "react-slick";

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const handleClick = (index: number) => {
        setActiveSlide(index);
        slidz.slickGoTo(index);
    }

    let slidz: any;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        beforeChange: (current: number, next: number) => { 
            setActiveSlide(next); 
        },
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
                slidesToShow: 3
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  className: "center",
                  centerMode: true,
                }
            }
          ]
    };

    const slides = [
        {
            name: 'project1.jpeg',
            title: 'Speculative trading',
            subtitle: 'Invest in real-word backed assets'
        },
        {
            name: 'project2.jpeg',
            title: 'Speculative trading 1',
            subtitle: 'Invest in real-word backed assets 1'
        },
        {
            name: 'project3.jpeg',
            title: 'Speculative trading 2',
            subtitle: 'Invest in real-word backed assets 2'
        },
        {
            name: 'project4.jpeg',
            title: 'Speculative trading 3',
            subtitle: 'Invest in real-word backed assets 3'
        },
        {
            name: 'project3.jpeg',
            title: 'Speculative trading 4',
            subtitle: 'Invest in real-word backed assets 4'
        },
        {
            name: 'project2.jpeg',
            title: 'Speculative trading 5',
            subtitle: 'Invest in real-word backed assets 5'
        },

    ];
    
    return (
        <div className="w-11/12 mx-auto mt-8 lg:mt-12 xl:mt-24">
            <div className="flex items-center justify-center">
                <PlusIcon className="w-8"></PlusIcon>
                <div className="w-10/12 items-center uppercase font-trash text-bold text-xl lg:text-3xl text-center">FUTURE-PROOF NFT<br/>INVESTMENTS</div>
                <PlusIcon className="w-8"></PlusIcon>
            </div>
            <div className="text-center font-inter mb-8">Break free from old beliefs</div>
            <Slider ref={slider => (slidz = slider)} {...settings} className="w-10/12 mx-auto">
                {slides.map((image, index) => (
                    <div key={`image_${index}`} className="px-2  outline-0">
                        <img alt={`Carbonable project ${index}`} onClick={() => handleClick(index)} src={`/assets/images/home/${image.name}`} className={index === activeSlide ? "rounded-lg brightness-125 cursor-pointer" : "rounded-lg brightness-75 cursor-pointer"} />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-wrap mt-8 text-center lg:text-left lg:w-10/12 lg:mx-auto lg:flex-nowrap">
                <div className="flex w-full items-center justify-center lg:w-9/12 lg:justify-start lg:flex-wrap">
                   <div className="flex w-full items-center justify-center lg:justify-start">
                    {slides.map((image, index) => (
                        <SliderButton key={`button_${index + 1}`} selected={index === activeSlide} onClick={() => handleClick(index)}>0{index + 1}</SliderButton>
                    ))}
                   </div>
                    <div className="w-full hidden lg:block lg:ml-1">
                        {slides[activeSlide].subtitle}
                    </div>
                </div>
                
                <div className="w-full font-inter text-2xl mt-4 lg:w-3/12 lg:text-right lg:text-4xl">
                    {slides[activeSlide].title}
                </div>
                <div className="w-full lg:hidden">
                    {slides[activeSlide].subtitle}
                </div>
            </div>
      </div>
    )
}

interface ButtonProps {
    children: React.ReactNode;
    selected: boolean;
    onClick: any;
}

function SliderButton({ children, selected, onClick }: ButtonProps) {
    if (selected) {
        return (
            <>
                <div className="relative w-[48px] h-[48px] p-1 bg-carousel-button-border rounded-full z-0 lg:px-3">
                    <div className="absolute z-1 m-[2px] top-0 left-0 font-inter text-beaige bg-[#000000] w-[44px] h-[44px] rounded-full">
                        <div className="bg-carousel-button w-[44px] h-[44px] rounded-full flex items-center justify-center">
                            { children }
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div onClick = {() => { onClick(); }} className="font-inter px-3 text-[#272727] cursor-pointer lg:px-6">{ children }</div>
    )
}
