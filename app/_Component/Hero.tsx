'use client';

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Slide = {
    src: string;
    text: string;
    subText: string;
    subSubText?: string;
};

const Hero_Slider = () => {
    const slides: Slide[] = [
        {
            src: "https://p.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/assets/images/1.jpg",
            text: "Stay Home & Get",
            subText: "Your Daily",
            subSubText: "Need's",
        },
        {
            src: "https://p.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/assets/images/2.jpg",
            text: "Make Your",
            subText: "Food",
            subSubText: "With Spicy."
        },
        {
            src: "https://p.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/assets/images/3.jpg",
            text: "Compare & Save",
            subText: "30% Money",
        },
    ];

    return (
        <div className="Carousel w-full">
            <Carousel plugins={[Autoplay({ delay: 4000 })]} opts={{ align: "start", loop: true }}>
                <CarouselContent className="p-0 m-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="p-0 m-0">
                            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
                                <Image alt={`slide-${index}`} src={slide.src} fill className="object-cover" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/55 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16">
                                    <h2 className="text-white text-[1.4em] sm:text-[1.8em] md:text-[2.2em] lg:text-[2.6em] font-light">
                                        {slide.text}
                                    </h2>
                                    <h2 className={`text-[1.4em] sm:text-[1.8em] md:text-[2.2em] lg:text-[2.6em] ${index === slides.length - 1 ? "text-orange-500 italic font-semibold" : "text-white font-semibold leading-[2em]"}`}>
                                        {slide.subText}
                                    </h2>
                                    <h2 className="text-[1.4em] sm:text-[1.8em] md:text-[2.2em] lg:text-[2.6em] text-white font-light mb-[1em] sm:mb-[2em]">
                                        {slide.subSubText}
                                    </h2>

                                    {/* Button */}
                                    <button className="bg-blue-600 hover:bg-orange-600 text-white font-semibold px-4 py-2 sm:px-6 rounded shadow cursor-pointer text-sm sm:text-base">
                                        <Link href="BrandedFood">Shop Now</Link>
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Hero_Slider;
