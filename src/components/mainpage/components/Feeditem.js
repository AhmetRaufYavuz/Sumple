import React, { useState, useEffect }from "react"; 
import { LikeIcon,DownloadIcon,PlayIcon } from '../icons/icons/icon'
import { Link } from "react-router-dom";

const Feeditem = ({record,user,sample_name})=> {
   
    return (
       <article className="flex space-x-3 border-b border-gray-ultralight px-4 py-3 cursor-pointer">
           <img src="https://pbs.twimg.com/profile_images/1462748410004615185/MLoWoYWC_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full" />
           <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold "> {user} </h4>
                     <span className="text-gray-dark"></span>
                 <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full">
                    
                      </div>
             </div> 
             <h4 className="font-serif "> {sample_name} </h4>

            






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

                <a href={record} target="_blank">
                    <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <PlayIcon className="group-hover:bg-primary-light"/>
                        </div>
                
                    </li>
                </a>
                
                
            </ul>
           </div>
       </article>
    )
}

export default Feeditem

//<Link to={record} >Click to play</Link> 