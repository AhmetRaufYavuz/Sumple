import { HomeIcon, ExploreIcon, Notification, Profile } from '../icons/icons/icon';
import logo from "../images/kabeers-music.svg";
import Sidelink from "../components/Sidelink";
import Userbox from '../components/Userbox';
import React, { Component} from 'react';
import {Navigate} from 'react-router-dom';
import Login from '../../login/login';

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
        name : 'Profile',
        icon : Profile,
    },
];




  class Sidebar extends Component {
    logout = event => {
        localStorage.removeItem('token')
        localStorage.removeItem('status')
      }


    render(){
        return (
            <div className = "h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
                <div>
                    <div className="mt-1 mb-4 ml-2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-enligth transform transition-colors duration-500 ">
                     <img src = 'img/music-svgrepo-com.svg' alt="Music logo" className = "w-12 h-12"/>
                        </div>  
                 
                   <nav className="mb-4">
                       <ul>
                       {sidelinks.map(({name, icon}) => ( <Sidelink key = {name} name={name} Icon = {icon} />))}
                       </ul>
                   </nav>
                   <button className= "bg-purple-600 hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-500" onClick = {this.logout}>Log Out</button>
               </div>
               <Userbox />
            </div>
            
        );
    }
    
};

export default Sidebar;

