import React from 'react';

interface ContactFormSubmission {
    name: string;
    phone: string;
    email: string;
    enquiry: string;
}

const EmailTemplate: React.FC<ContactFormSubmission> = ({ name, phone, email, enquiry }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
            <table
                style={{
                    maxWidth: '600px',
                    margin: 'auto',
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderCollapse: 'collapse',
                }}
            >
                <tr>
                    <td
                        style={{
                            backgroundColor: '#007bff',
                            color: '#ffffff',
                            padding: '10px',
                            textAlign: 'center',
                        }}
                    >
                        <h1>New Contact Us Submission</h1>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '20px', lineHeight: '1.5' }}>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Full Name:</span> {name}
                        </p>
                        {phone ? <p>
                            <span style={{ fontWeight: 'bold' }}>Phone Number:</span> {phone}
                        </p> : ''}
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Email:</span> {email}
                        </p>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Enquiry:</span>
                        </p>
                        <p>{enquiry}</p>
                        <p>Use this information to respond to the inquiry as needed. Please ensure to follow up promptly to maintain engagement and satisfaction.</p>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default EmailTemplate;
