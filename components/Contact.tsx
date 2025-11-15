
import React from 'react';

const ContactPerson: React.FC<{ name: string; phone: string }> = ({ name, phone }) => {
    const phoneLink = `tel:${phone.replace(/\s/g, '')}`;
    return (
        <div className="text-center">
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <a href={phoneLink} className="text-xl text-amber-400 hover:text-amber-300 transition-colors duration-300 tracking-wider">
                {phone}
            </a>
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to start your project or need emergency assistance? Get in touch with our expert team today.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
                        <ContactPerson name="Deniz Doldur" phone="+44 7379 005878" />
                        <ContactPerson name="Ugur Hurmeydan" phone="+44 7393 480822" />
                    </div>
                    <div className="text-center">
                        <a href="mailto:provoltelectricalsystems@gmail.com" className="text-xl text-amber-400 hover:text-amber-300 transition-colors duration-300 break-all">
                            provoltelectricalsystems@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;