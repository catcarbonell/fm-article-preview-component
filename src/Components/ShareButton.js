import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const ShareButton = () =>{
    return(
        <div className="relative w-full p-4 relative flex justify-end items-center cursor-pointer"> 
            <div className="absolute z-30  w-8 h-8 rounded-full 
                            flex justify-center items-center 
                            text-custom-300 bg-custom-100
                            hover:text-custom-100 hover:bg-custom-400">
                <FontAwesomeIcon icon={faShare} />
            </div>
    </div>
    );
};

export default ShareButton;