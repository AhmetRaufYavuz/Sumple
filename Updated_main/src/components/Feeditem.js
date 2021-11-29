import React from 'react'
import { LikeIcon,DownloadIcon,PlayIcon } from '../icons/icons/icon'

const Feeditem = () => {
    return (
       <article className="flex space-x-3 border-b border-gray-ultralight px-4 py-3 cursor-pointer">
           <img src="https://pbs.twimg.com/profile_images/1462748410004615185/MLoWoYWC_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full" />
           <div className="flex-1">
           <div className="flex items-center text-sm">
               <h4 className="font-bold ">
                   User Name </h4>
               <span className="text-gray-dark"></span>
               <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"> </div>
            </div> 
            <p className="mt-2 text-gray-900 text-sm">Sample_Name</p>
            <ul className="ml-1 mt-3 flex justify-between max-w-md">
                <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                        <LikeIcon className="group-hover:bg-primary-light"/>
                    </div>
                    <span className="group-hover:text-purple-600">25</span>
                </li>

                <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                        <DownloadIcon className="group-hover:bg-primary-light"/>
                    </div>
                    
                </li>


                <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                        <PlayIcon className="group-hover:bg-primary-light"/>
                    </div>
                
                </li>
                
            </ul>
           </div>
       </article>
    )
}

export default Feeditem
