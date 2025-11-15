
import React from 'react';
import { ProvoltIcon } from './Icons';

const ServiceItem: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center space-x-3">
        <ProvoltIcon className="h-5 w-auto text-amber-400 flex-shrink-0" />
        <span className="text-lg text-gray-200">{title}</span>
    </div>
);

const Services: React.FC = () => {
    const serviceList = [
        "Electrical Installations",
        "Wiring & Rewiring",
        "Fire Alarm Systems",
        "Fault Finding",
        "Data Installations",
        "Electrical Repairs",
        "CCTV Systems",
        "Emergency Services",
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our Expertise</h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        We offer a comprehensive range of electrical services to meet your needs, ensuring quality and safety every step of the way.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-900/50 p-8 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {serviceList.map((service, index) => (
                            <ServiceItem key={index} title={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;