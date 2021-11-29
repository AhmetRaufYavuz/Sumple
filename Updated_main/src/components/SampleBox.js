import React from 'react'
import { Notification } from '../icons/icons/icon'

export const SampleBox = () => {
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="Upload Samples!!!" />
            <div className="flex items-center justify-between">
                <div className="flex ml-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-enligth">
                  <Notification className="w-6 h-6 text-purple-600"/>
                  </div>
                </div>
                <button className="bg-purple-600 text-white shadow-lg rounded-full hover:bg-primary-base px-4 py-2 font-medium transform transition-colors duration-500"/*onClick={(uploadSample)} */>Upload</button>

            </div>
        </div>
    )
}

