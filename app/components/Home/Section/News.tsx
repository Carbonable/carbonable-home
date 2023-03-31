import Slider from "react-slick";
import PlusIconWhite from "~/components/Icons/PlusIcon";
import { urlFor } from "~/utils/sanity/image";

export default function News({news}: {news: any[]}) {
    let slidz: any;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
    };

    return (
        <div id="news" className="w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-12 lg:mt-16 xl:mt-32">
            <div className="flex items-center justify-center">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 items-center uppercase font-trash text-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
                    In the News
                </h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="w-full relative mt-8">
                <Slider ref={slider => (slidz = slider)} {...settings} className="w-11/12 lg:w-10/12 mx-auto md:mt-8">
                    {news.map((article: any, index: any) => (
                        <div key={`article_${article.media}`}>
                            <div className="p-2 lg:p-6 outline-0 flex flex-nowrap w-full justify-start items-start">
                                <div className="w-fit">
                                    <a href={article.link} target="_blank" rel="noreferrer">
                                        <img alt={article.title} src={urlFor(article.image).width(200).url()} className="rounded-lg min-w-[80px] w-[80px] lg:min-w-[120px] lg:w-[120px]" />
                                    </a>
                                </div>
                                <div className="pl-4 w-fit">
                                    <a href={article.link} target="_blank" rel="noreferrer">
                                        <div className="font-inter font-extralight text-white">{article.title}</div>
                                    </a>
                                    <div className="text-grey font-trash font-bold text-sm mt-1">{article.media}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}