import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Share = ({ shareActive }) => {
    return(
        <>
        {shareActive &&
        <div className="absolute z-10 inset-x-0 bottom-0
                        md:inset-y-auto md:left-auto 
                        md:mt-24 md:-mr-16">
            <div className="w-full h-16 px-8 mx-auto
                            flex flex-row justify-start items-center
                            bg-custom-400
                            md:w-64 md:h-12
                            md:justify-center
                            md:rounded-md md:shadow-xl">
                <div className="flex content-around items-center">
                    <h3 className="uppercase text-custom-200 tracking-hella">Share</h3>
                    <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faFacebook} />
                    <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faTwitter} />
                    <FontAwesomeIcon className="text-custom-100 m-2" size="lg" icon={faPinterest} />
                </div>
                <div className="md:fixed md:w-2 md:h-2 md:bg-custom-400 md:p-2 md:mt-12 md:transform md:rotate-45"></div>
            </div>
        </div>
        }
        </>
    );
}

export default Share;