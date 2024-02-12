'use server'

import { Resend } from 'resend'
import EmailTemplate from '@/app/_components/email-template';

export async function sendEmail(formData) {

    const resend = new Resend(process.env.RESEND_API_KEY)

    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const enquiry = formData.get('enquiry')
    try {
        const { data, error } = await resend.emails.send({
            from: 'Website Contact Form - <onboarding@resend.dev>',
            to: 'alphask37@gmail.com',
            subject: 'New Contact Us Submission',
            reply_to: email,
            // TODO: -------> use react email template here later
            react: EmailTemplate({ name, email, phone, enquiry })
        })
        return true
    } catch (error) {
        return false
    }
}