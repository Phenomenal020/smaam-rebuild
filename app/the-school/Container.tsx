import Image from "next/image";

import Header from '../_components/Header';

const Mission = () => {
    return (
        <section className="bg-gray-100 py-10 max-width min-w-[360px]">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src='/images/ourVision.png' width={70} height={70} alt="vision icon" />
                        <h4 className="text-lg font-semibold mt-4 capitalize">Our Vision</h4>
                        <p className="text-center mt-2 text-sm md:text-[15px] leading-6">
                            To create a nurturing school community where children excel in their achievements and are inspired to continue learning in the future.
                        </p>
                    </div>
                    <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src='/images/ourMission.png' width={70} height={70} alt="mission icon" />
                        <h4 className="text-lg font-semibold mt-4 capitalize">Our mission</h4>
                        <p className="text-center mt-2  text-sm md:text-[15px] leading-6">
                            To produce children who are morally, socially and academically
                            sound.
                        </p>
                    </div>
                    <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src='/images/ourGoals.png' width={70} height={70} alt="goals icon" />
                        <h4 className="text-lg font-semibold mt-4 capitalize">Our goals</h4>
                        <p className="text-center mt-2  text-sm md:text-[15px] leading-6">
                            To provide a nurturing and inclusive learning environment that
                            empowers students to achieve academic excellence, enhance social
                            skills, be compassionate and be creative.
                        </p>
                    </div>
                    <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src='/images/ourCoreValues.png' width={70} height={70} alt="goals icon" />
                        <h4 className="text-lg font-semibold mt-4 capitalize">our core values</h4>
                        <p className="text-center mt-2  text-sm md:text-[15px] leading-6">
                            Integrity
                            <br />
                            Empathy
                            <br />
                            Innovation
                            <br />
                            Excellence
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};


const AboutAndAnthem = () => {
    return (
        <section className="bg-white text-gray-800 py-10 max-width min-w-[360px]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-bold border-b-2 border-gray-200 mb-4">About The School</h4>
                        <p className="mb-4 text-justify text-sm md:text-[15px] leading-6">
                            St. Michael the Archangel Academy Makurdi, a beacon of educational excellence, has a remarkable history that began on September 10, 2018. Founded by Mr. Mathew Ezenwaka and Mrs.Stella Ezenwaka, the school opened its doors with a population of 141 eager pupils, housed in 10 classrooms, and supported by a dedicated team of fourteen staff members.
                        </p>
                        <p className="mb-4 text-justify text-sm md:text-[15px] leading-6">
                            One of the school&apos;s earliest symbols of unity and pride was its
                            anthem, a poetic masterpiece crafted by Miss Ezenwaka Augusta
                            Amarachi. This anthem, not only rich in words but deeply resonant in
                            meaning, was brought to life through the musical talents of Mr.
                            Henry Amagen, creating a melody that has been sung with heartfelt
                            enthusiasm by generations of students.
                        </p>
                        <p className="mb-4 text-justify text-sm md:text-[15px] leading-6">
                            As the sun rose on that memorable first day of resumption, one name
                            etched itself into the annals of the school&apos;s history - Master
                            Onubuiyi Miracle. With a backpack filled with dreams and a heart
                            brimming with excitement, he became the very first pupil to arrive,
                            setting a precedent for the curiosity, determination, and spirit of
                            exploration that would become synonymous with St. Michael the
                            Archangel Academy, Makurdi.
                        </p>
                        <p className="mb-4 text-justify text-sm md:text-[15px] leading-6">
                            From these humble beginnings, St. Michael the Archangel Academy
                            Makurdi has flourished into a nurturing institution dedicated to
                            academic excellence, character development, and a commitment to
                            shaping future generations. The school&apos;s journey is a testament
                            to the enduring vision of its founder and the unwavering dedication
                            of its staff, students, and the broader community. As it continues
                            to evolve and inspire, the school&apos;s history remains a source of
                            pride and motivation for all who walk its hallowed halls.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold border-b-2 border-gray-200 mb-4">National Anthem</h4>
                        <p className="mb-4 text-sm md:text-[15px] leading-6">
                            Arise, O compatriots
                            <br /> Nigeria's call obey
                            Arise, O compatriots
                            <br />
                            Nigeria&apos;s call obey
                            <br />
                            To serve our fatherland
                            <br />
                            With love and strength and faith
                            <br />
                            The labour of our heroes past
                            <br />
                            Shall never be in vain
                            <br />
                            To serve with heart and might
                            <br />
                            One nation bound in freedom, peace, and unity.
                        </p>
                        <p className='mb-4 text-sm md:text-[15px] leading-6'>
                            Oh God of creation,
                            <br />
                            Direct our noble cause
                            <br />
                            Guide our leader&apos;s right
                            <br />
                            Help our youth the truth to know
                            <br />
                            In love and honesty to grow
                            <br />
                            And living just and true
                            <br />
                            Great lofty heights attain
                            <br />
                            To build a nation where peace and justice shall reign.
                        </p>
                        <h4 className="text-xl font-bold border-b-2 border-gray-200 mb-4 mt-8">Our Anthem</h4>
                        <p className="mb-4 text-sm md:text-[15px] leading-6">
                            Beloved St.Michael,
                            <br /> The Patron of St.Michael the Archangel Academy,
                            <br /> The Patron of St.Michael the Archangel Academy, <br />
                            Protect our dear school, <br /> We humbly pray (We humbly pray)
                            <br />
                            <br />
                            We are Michaelites, First Step to Excellence.
                            <br />
                            We shall be our Parents&apos; pride.
                            <br />
                            We shall work hard to be the best (to be the best)
                            <br />
                            <br />
                            Grant us Lord with St.Michael,
                            <br />
                            To fight against the Prince of Pride <br />
                            So we may be rewarded
                            <br />
                            With a Crown of Excellence. (Excellence)
                            <br />
                            So we may be rewarded
                            <br />
                            With a Crown of Excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


function Container() {
    return (
        <div>
            <Header text="The School" />
            <Mission />
            <AboutAndAnthem />
        </div>
    )
}

export default Container