import { newsReader } from '@/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section className="bg-gray-50 text-gray-700 p-4 md:p-8 max-width min-w-[360px]" id='welcomeSection'>
            <h4 className={`${newsReader.className} text-2xl md:text-3xl font-bold text-center mb-6`}>
                Welcome to St. Michael the Archangel Academy, Makurdi.
            </h4>

            <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6">

                <div className="w-full md:w-[50%] h-auto rounded-sm overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 relative min-h-[300px] mb-4">
                    <Image
                        src="/images/welcome-image.jpg"
                        alt="welcome"
                        fill={true}
                        objectFit='cover'

                    />
                </div>

                <div className="flex flex-col justify-center items-center w-full md:w-[50%]">
                    <p className="text-base mb-6 text-justify leading-6">
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
                    <div className='w-full flex justify-center md:justify-start'>
                        <Link href="/welcome" className="link-btn">
                            Learn More &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
