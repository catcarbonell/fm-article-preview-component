import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const ShareButton = (props) =>{
    return(
        <div className="absolute z-30 inset-x-0
                        w-full h-16 pr-10 bottom-0
                        flex justify-end items-center"> 
            <div onClick={ props.toggleShare }
                    className="md:w-10 md:h-10 
                            w-8 h-8 rounded-full cursor-pointer
                            flex justify-center items-center 
                            text-custom-300 bg-custom-100
                            hover:text-custom-100 hover:bg-custom-300
                            active:text-custom-100 active:bg-custom-300">
                <FontAwesomeIcon size="lg" icon={faShare} />
            </div>
    </div>
    );
};

export default ShareButton;