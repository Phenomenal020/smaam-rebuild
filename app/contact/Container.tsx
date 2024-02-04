import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import Header from '../_components/Header';

const ContactSection = () => {
    return (
        <>
            <Header text="Contact us" />
            <div className="bg-gray-100 text-gray-800 p-6 md:p-12 max-width min-w-[360px]">
                <div className="mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="flex flex-col md:px-4 md:w-[50%]">
                            <h3 className="text-xl font-semibold mb-2">Have any Questions?</h3>
                            <p className="mb-2">We are happy to hear from you.</p>
                            <div className="mb-4">
                                <AiOutlineHome className="inline-block  text-blue-600 text-xl" />
                                <span className="align-middle ml-2 font-bold text-sm md:text-base">Address</span>
                                <p className="mt-1 text-sm md:text-base">No.4 Aliade Street Highlevel, Makurdi Benue State, Nigeria. Opposite Bishop Murray medical centre Highlevel Makurdi.</p>
                            </div>
                            <div className="mb-4">
                                <AiOutlineMail className="inline-block text-blue-600 text-2xl" />
                                <span className="align-middle ml-2 font-bold text-sm md:text-base">Email</span>
                                <p className="mt-1 break-words text-sm md:text-base">St.michaelthearchangelacademymakurdi2@gmail.com</p>
                            </div>
                            <div className="mb-4">
                                <AiOutlinePhone className="inline-block text-blue-600 text-2xl" />
                                <span className="align-middle ml-2 font-bold text-sm md:text-base">Phone Number</span>
                                <p className="mt-1 text-sm md:text-base">+234 (0) 806 9371 264, +234 (0) 704 4362 422</p>
                            </div>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6224695424953!2d8.5324221!3d7.7235923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105081b5bf555d3f%3A0xce4723f7aa0f48d!2sSt.Micheal%20The%20Archangel%20Academy!5e0!3m2!1sen!2sng!4v1689471807820!5m2!1sen!2sng"
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                    id="map"
                                    style={{
                                        border: 0,
                                        width: "100%",
                                        aspectRatio: "4/3",
                                        maxHeight: "300px",
                                        marginTop: "1em",
                                    }}
                                ></iframe>
                            </div>
                        </div>

                        <div className="md:flex mt-8 md:mt-0 md:w-[50%]">
                            <div className="bg-primary text-white p-6 rounded-lg shadow-lg w-full">
                                <div className="flex justify-center mb-6">
                                    <BsSend size={30} className="text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-center">General Enquiry</h4>
                                <form className="flex flex-col space-y-2 text-[#000]">
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        name="name"
                                        id="name"
                                        className="form-input px-4 py-2 rounded"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        name="email"
                                        id="email"
                                        className="form-input px-4 py-2 rounded"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        name="phone"
                                        id="phone"
                                        className="form-input px-4 py-2 rounded"
                                    />
                                    <textarea
                                        name="enquiry"
                                        id="enquiry"
                                        cols={30}
                                        rows={8}
                                        placeholder="Your Enquiry"
                                        className="form-textarea px-4 py-2 rounded"
                                    ></textarea>
                                    <button type="submit" className="btn bg-white text-blue-800 font-bold py-2 rounded hover:bg-blue-800 hover:text-white hover:border-0 text-base">
                                        Submit Enquiry
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;

