import React from 'react'

const Sidelink = ({name,Icon}) => {
 
    return (
        <li className="group">
            <a href={name.toLowerCase()} className="cursor-pointer block text-xl mb-2">
                <div className="inline-block">
                <div className={'flex items-center group-hover:bg-purple-300 group-hover:text-black rounded-full pl-3 pr-8 py-3'} >
                    <Icon />
                    <span className="ml-4 font-bold">{name}</span>
                </div>
                </div>
            </a>
        </li>
    )
}

export default Sidelink
