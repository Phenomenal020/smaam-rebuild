'use client'

import { useRef } from "react";
import { newsReader } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type Props = {}

function Banner({ }: Props) {


    return (
        <section className="bg-base-200 w-full flex items-center justify-center" id='banner'>


            <div className="flex-col lg:flex lg:flex-row-reverse gap-8 max-width min-width aspect-video lg:items-center p-4">
                {/* slider */}
                <div className="w-5/6 mx-auto  rounded-lg shadow-2xl overflow-hidden lg:w-1/2 my-6  ">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                alt='banner'
                                src="/images/banner003.jpg"
                                width={450}
                                height={320}
                                layout="responsive"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='banner'
                                src="/images/banner002.jpg"
                                width={450}
                                height={320}
                                layout="responsive"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='banner'
                                src="/images/banner001.jpg"
                                width={450}
                                height={320}
                                layout="responsive"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
                {/* text */}
                <div className="w-full mx-auto text-center lg:text-left md:w-[75%] lg:w-1/2">
                    <h1 className={` ${newsReader.className} text-3xl md:text-5xl font-extrabold`}>First Step to Excellence</h1>
                    <p className="py-2 lg:py-4 text-base font-semibold">Building a Foundation for Lifelong Learning: Our School is a Beacon for Young Explorers, Dreamers, and Leaders Ready to Change the World</p>
                    <Link href='/admission-process' className="link-btn">Get Started &rarr;</Link>
                </div>
            </div>
        </section>

    )
}

export default Banner;
