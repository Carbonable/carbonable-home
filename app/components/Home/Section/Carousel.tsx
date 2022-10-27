import { useState } from "react";
import Slider from "react-slick";
import LinkButton, { LinkOutsideButton } from "~/components/Button";
import PlusIconWhite from "~/components/Icons/PlusIcon";
import { MEDIUM_LINK } from "~/utils/links";

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
        slidesToShow: 3,
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
                  slidesToShow: 3
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
            name: 'project1.png',
            title: 'Speculative trading',
            subtitle: 'Invest in real-word backed assets'
        },
        {
            name: 'project2.png',
            title: 'Greenwashing',
            subtitle: 'Premium, transparent and traceable carbon removal'
        },
        {
            name: 'project3.png',
            title: 'Short-term returns',
            subtitle: 'Earn ongoing high, lasting and transparent yields'
        },
        {
            name: 'project4.png',
            title: 'Volatile yields',
            subtitle: 'Gain exposure to a booming market with ever-increasing asset values'
        },
        {
            name: 'project5.png',
            title: 'Illiquid investments',
            subtitle: 'Resell your assets at your own discretion'
        },

    ];
    
    return (
        <div id="assets" className="w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-8 scroll-snap-center lg:mt-12 xl:mt-24">
            <div className="flex items-start justify-center">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 items-center uppercase font-trash text-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">FUTURE-PROOF NFT<br/>INVESTMENTS</h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <h2 className="text-center font-inter mb-8">Break free from old beliefs</h2>
            <Slider ref={slider => (slidz = slider)} {...settings} className="w-10/12 mx-auto md:mt-8">
                {slides.map((image, index) => (
                    <div key={`image_${index}`} className="px-2  outline-0">
                        <img alt={`Carbonable project ${index}`} onClick={() => handleClick(index)} src={`/assets/images/home/${image.name}`} className={index === activeSlide ? "rounded-lg brightness-110 cursor-pointer" : "rounded-lg brightness-50 cursor-pointer"} />
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
                
                <div className="w-full flex items-center justify-center font-inter text-3xl line-through mt-4 lg:w-4/12 lg:justify-end lg:text-right lg:min-h-[96px] md:text-4xl lg:text-5xl">
                    {slides[activeSlide].title}
                </div>
                <div className="w-full lg:hidden min-h-[52px]">
                    {slides[activeSlide].subtitle}
                </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start lg:w-10/12 mx-auto mt-8">
                <LinkButton href="#simulator" className="bg-green text-xs md:text-sm">Estimate your yield</LinkButton>
                <LinkOutsideButton href={MEDIUM_LINK} className="bg-lightblue text-xs md:text-sm ml-2">Learn more</LinkOutsideButton>
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
