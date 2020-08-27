import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

// Button needs to toggleShare
const ShareButton = (props) =>{
    return(
        <div onClick = {props.toggleShare}
             className="absolute z-30 bottom-0 inset-x-0 
                        w-full h-16 px-8 cursor-pointer
                        flex justify-end items-center"> 
            <div className="w-8 h-8 rounded-full 
                            flex justify-center items-center 
                            text-custom-300 bg-custom-100
                            hover:text-custom-100 hover:bg-custom-400
                            active:text-custom-100 active:bg-custom-300">
                <FontAwesomeIcon size="lg" icon={faShare} />
            </div>
    </div>
    );
};

export default ShareButton;