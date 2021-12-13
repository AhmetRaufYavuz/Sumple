import React from "react";


const Svg = ({ children, className}) => {
    return (

        <svg viewBox = "0 0 24 24" className= {className}> {children} </svg>
    );

};

export const HomeIcon = () => {
    return (
        <Svg className="w-7 h-7">
            <g><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"> </path></g>

        </Svg>
        
    );
};

export const ExploreIcon = () => {
    return (
        <Svg className="w-7 h-7">
            <g><path d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></g>

        </Svg>
        
    );
};
export const Notification = () => {
    return (
        <Svg className="w-7 h-7">
            <g><path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" ></path></g>

        </Svg>
        
    );
};

export const Profile = () => {
    return (
        <Svg className="w-7 h-7">
            <g><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></g>

        </Svg>
        
    );
};

    export const LikeIcon = () => {
        return (
            <Svg className="w-7 h-7">
                <g><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"> </path></g>
    
            </Svg>
            
        );
    };
    
    export const DownloadIcon = () => {
        return (
            <Svg className="w-7 h-7">
                <g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"> </path></g>
    
            </Svg>
            
        );
    };

    export const PlayIcon = () => {
        return (
            <Svg className="w-7 h-7">
                <g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path></g>
    
            </Svg>
            
        );
    };
    



