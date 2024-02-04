import React from 'react';
import Image from "next/image";
import Header from '../_components/Header';

const AdmissionProcess = () => {
    return (
        <>
            <Header text="Admission Process" />
            <section className="bg-gray-100 py-10 max-width min-width">
                <div className="px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Visit the School:</strong> Begin the admission process by visiting St. Michael the Archangel Academy in person.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Purchase Admission Forms:</strong> Obtain the necessary
                                    admission form&apos;s from the school&apos;s administrative
                                    office.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Complete the Forms:</strong>  Fill out the admission forms
                                    accurately and thoroughly.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Attach Documents:</strong>  Along with the completed forms,
                                    attach essential documents such as a copy of the
                                    student&apos;s birth certificate and a passport-sized
                                    photograph.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Submit the Application:</strong>  Return the completed forms,
                                    along with the required documents, to the school&apos;s
                                    administrative office.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <p className='text-sm md:text-base'>
                                    <strong>Interview:</strong> An interview will be carried out to assess
                                    each applicant&apos;s eligibility and compatibility with the
                                    school&apos;s values and mission.
                                </p>
                            </div>

                        </div>
                        <div className="relative h-[386px] md:h-[440px] lg:h-[400px] z-10">
                            <Image
                                src="/images/admission-process-page.jpg"
                                alt="Admission process"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdmissionProcess;
