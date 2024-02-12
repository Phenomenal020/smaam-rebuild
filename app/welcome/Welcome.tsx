import React from 'react';
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Header from '../_components/Header';

const FoundersNote = () => {
    return (
        <>
            <Header text="Founder&apos;s Note" />
            <section className="bg-white text-gray-800 py-10 max-width min-width fadeIn" id='founder-note-page'>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="relative h-[720px] w-full">
                                <Image
                                    src="/images/Founders.jpg"
                                    alt="Founders"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-base">
                                Dear Parents, Students, and Esteemed Guests,
                            </p>
                            <p className="text-base">
                                It is with immense joy that we welcome you to St. Michael the Archangel Academy Makurdi.
                            </p>
                            <p className="text-base">
                                Our journey began on September 10, 2018, guided by a profound vision
                                - a vision to create a school where children would not only excel in
                                their achievements but also be inspired to continue learning in the
                                future. This vision became the driving force behind our mission.
                            </p>
                            <p className="text-base">
                                Our motto, &quot;The First Step to Excellence,&quot; reminds us that
                                every journey begins with a single step. Each child who walks
                                through our doors takes that crucial first step toward a future
                                filled with limitless possibilities. Our goal is to support and
                                guide them on this journey, ensuring that they grow not only
                                academically but also as responsible, compassionate, and ethical
                                individuals.
                            </p>
                            <p className="text-base">
                                As the founders of this institution, we are humbled by the
                                dedication of our staff, the enthusiasm of our students, and the
                                unwavering support of our parents and the community. Together, we
                                have transformed a vision into a thriving reality, and I am excited
                                about the boundless potential that lies ahead.
                            </p>
                            <p className="text-base">
                                We invite you all to join us in this remarkable educational
                                adventure, where every day is an opportunity to learn, grow, and
                                aspire to greatness. Together, we shall continue to uphold the
                                values that define us, celebrate the diversity that enriches us, and
                                strive for excellence in all that we do.
                            </p>
                            <p className="text-base">
                                Thank you for entrusting us with the education and development of
                                your children. Together, we shall inspire and shape the leaders and
                                learners of tomorrow.
                            </p>
                            <p className="text-base font-semibold">
                                With warm regards,
                            </p>
                            <p className="text-base font-semibold">
                                Mrs. Stella Ezenwaka
                                <br />
                                Founders, St. Michael the Archangel Academy Makurdi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default FoundersNote;
