import { newsReader } from '@/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section className=" text-gray-700 p-4 w-full" id='welcome'>
            <section className=" text-gray-700 p-4 max-width min-width" id='welcomeSection'>


                <div className="flex flex-col lg:flex-row  lg:gap-6 my-4">
                    <h3 className={`${newsReader.className} text-2xl font-bold text-center mb-4 lg:hidden`}>
                        Welcome to St. Michael the Archangel Academy, Makurdi.
                    </h3>

                    <div className="w-full lg:w-[50%] rounded-sm overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 relative h-[300px] md:h-[360px] lg:min-h-[450px] mb-4">
                        <Image
                            src="/images/welcome-image.jpg"
                            alt="welcome"
                            fill={true}
                            className='object-cover w-full h-full rounded-lg'

                        />
                    </div>

                    <div className="flex flex-col justify-center items-center w-full lg:w-[50%]">
                        <h3 className={`${newsReader.className} text-2xl hidden lg:block font-bold text-center mb-4`}>
                            Welcome to St. Michael the Archangel Academy, Makurdi.
                        </h3>
                        <p className="text-base md:text-base mb-6 text-justify leading-6 ">
                            Welcome to St. Michael the Archangel Academy Makurdi, proudly
                            serving the community with a commitment to nurturing young minds and
                            guiding them on their educational journey towards excellence. At our
                            esteemed institution, we believe that every step a child takes is a
                            crucial one on the path to excellence. With our dedicated staff,
                            enriching curriculum, and a supportive learning environment, we
                            empower our students to take that first step and every subsequent
                            one with confidence, enthusiasm, and a thirst for knowledge. Join us
                            in shaping a brighter future for your child as we embark together on
                            this remarkable educational adventure.
                        </p>
                        <div className='w-full flex justify-center lg:justify-start'>
                            <Link href="/welcome" className="link-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
