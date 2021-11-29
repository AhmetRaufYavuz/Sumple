import React from 'react';

const Userbox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-500">
            <img src="https://pbs.twimg.com/profile_images/1462748410004615185/MLoWoYWC_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full" />
            <div className="flex flex-col">
            <span className="font-bold text-md text-black">
                Hasmetli Roof
            </span>
            <span className="text-sm text-gray-dark">
                @TheBigRoof
            </span>
            </div>
            <div className="flex">
                <div className="w-2 h2 bg-gray-900 rounded-full" />
                <div className="w-2 h2 bg-gray-900 rounded-full" />
                <div className="w-2 h2 bg-gray-900 rounded-full" />

                
            </div>
        </div>
    );
};

export default Userbox;
