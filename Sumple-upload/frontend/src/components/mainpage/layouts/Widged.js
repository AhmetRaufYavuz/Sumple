import React from 'react';
import { ExploreIcon } from '../icons/icons/icon';
import {Timeline} from "react-twitter-widgets";

const Widged = () => {
    return (
        <aside className= " w-80">
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-700"> 
                <ExploreIcon className=" w-5 h-5"/>
                <input type = "text" placeholder="Search samples" className="placehoder-gray-dark bg-transparent focus:outline-none w-full text-sm" />
                
             </div>
            <div className="mt-5">
            <Timeline
                 dataSource={{
                sourceType: 'profile',
                screenName: 'splice'
                    }}
                 options={{
                height: '600'
                    }}
                            />  


            </div>
            </aside>
            
        
    );
};

export default Widged;
