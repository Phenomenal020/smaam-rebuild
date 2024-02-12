'use client'

import { sendEmail } from '@/utils/actions';
import { useRef } from 'react'
import { toast } from 'react-hot-toast';

type Props = {}

function FormUi({ }: Props) {

    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        //TODO ---------> validate fields
        const result = await sendEmail(formData);
        if (result) {
            toast.success('Your message has been sent successfully. We will get back to you as soon as possible')
            // resetForm();
            formRef.current?.reset();
        } else {
            toast.error('An error occurred while sending your message. Please try again later')
        }
    }

    return (
        <form className="flex flex-col space-y-2 text-[#000] justify-center" action={clientAction} ref={formRef}>
            <input
                type="text"
                placeholder="Your Full Name"
                name="name"
                id="name"
                required
                className="form-input px-4 py-2 rounded"
            />

            <input
                type="email"
                placeholder="Your Email Address"
                name="email"
                required
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
                required
            ></textarea>

            <button type="submit" className="btn bg-white text-blue-800 font-bold py-2 rounded hover:bg-blue-800 hover:text-white hover:border-0 text-base" >
                Submit Enquiry
            </button>
        </form>
    )
}

export default FormUi