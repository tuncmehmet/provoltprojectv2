
import React from 'react';

interface IconProps {
    className?: string;
}

export const LightningBoltIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 21.883L5.429 13.914C5.158 13.524 5 13.024 5 12.5V4C5 2.895 5.895 2 7 2H17C18.105 2 19 2.895 19 4V12.5C19 13.024 18.842 13.524 18.571 13.914L13 21.883V16H11V21.883Z" />
    </svg>
);

export const ProvoltIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        viewBox="0 0 24 36"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="currentColor"
    >
        <path d="M8.86364 36L24 14.1818H14.1364L17.4545 0L0 21.8182H9.86364L6.54545 36H8.86364Z" />
    </svg>
);

export const Logo: React.FC<IconProps> = ({ className }) => (
    <div className={`flex items-center text-white ${className}`}>
        <ProvoltIcon className="h-10 w-auto md:h-12 text-amber-400 mr-3" />
        <div>
            <span className="text-2xl md:text-3xl font-bold tracking-wider">PROVOLT</span>
            <p className="text-xs md:text-sm font-light tracking-[0.3em] text-gray-300">ELECTRICAL</p>
        </div>
    </div>
);
