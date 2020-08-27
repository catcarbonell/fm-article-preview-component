import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Share = () => {
    return(
        <div className="w-full h-20 px-6 flex flex-row justify-start items-center bg-custom-400">
            <div className="absolute z-10 flex content-around items-center">
                <h3 className="uppercase text-custom-200 tracking-hella">Share</h3>
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faFacebook} />
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faTwitter} />
                <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faPinterest} />
 
            </div>
        </div>
    );
}

export default Share;