import React from 'react';
import { HomeIcon, ExploreIcon, Notification, Profile } from '../icons/icons/icon';
import logo from "../images/kabeers-music.svg";
import Sidelink from "../components/Sidelink";
import Userbox from '../components/Userbox';

const sidelinks =[
    {
        name : 'Home',
        icon : HomeIcon,
    },

    {
        name : 'Explore',
        icon : ExploreIcon,
    },

    {
        name : 'Notification',
        icon : Notification,
    },

    {
        name : 'Profile',
        icon : Profile,
    },
];


const Sidebar = () => {


    return (
        <div className = "h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mt-1 mb-4 ml-2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-enligth transform transition-colors duration-500 ">
                 <img src = {logo} alt="Music logo" className = "w-12 h-12"/>
                    </div>  
             
               <nav className="mb-4">
                   <ul>
                   {sidelinks.map(({name, icon}) => ( <Sidelink key = {name} name={name} Icon = {icon} />))}
                   </ul>
               </nav>
               <button className= "bg-purple-600 hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-500">Upload</button>
           </div>
           <Userbox />
        </div>
        
    );
};

export default Sidebar;

