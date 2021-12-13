import React from 'react';
import Divider from '../components/Divider';
import { SampleBox } from '../components/SampleBox';
import FeedList from '../components/FeedList';

const Content = () => {
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-ultralight">
            <header className="sticky top-0  z-10 flex justify-between items-center p-4 border-b border-gray-ultralight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
            </header>

            <div className="flex space-x-4 px-4 py-3">
                <img src="https://pbs.twimg.com/profile_images/1462748410004615185/MLoWoYWC_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full" />

                <SampleBox />
            </div>
            <Divider />

            <FeedList />
            
            <FeedList />
            
            <FeedList />
            
            <FeedList />
            



        </main>
    );
};

export default Content;
