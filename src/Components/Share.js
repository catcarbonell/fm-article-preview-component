import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Share = ({ shareActive, setShareActive }) => {
    return(
        <>
        {shareActive &&
        <div className="absolute z-10 inset-x-0 bottom-0
                        w-full h-16 px-8 
                        flex flex-row justify-start items-center
                        bg-custom-400">
            <div className="flex content-around items-center">
                <h3 className="uppercase text-custom-200 tracking-hella">Share</h3>
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faFacebook} />
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faTwitter} />
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faPinterest} />
            </div>
        </div>
        }
        </>
    );
}

export default Share;