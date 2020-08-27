import React from 'react';
import avatar from '../Assets/avatar-michelle.jpg';

const User = () => {
    return(
        <div className="absolute z-0 flex flex-row w-full px-4 pb-4">
            <div className="w-3/4 mx-auto flex flex-row justify-start">
                <img className="w-10 h-10 rounded-full shadow" src={avatar} alt="User Michelle Appleton" />
                <div className="ml-2">
                    <h2 className="font-bold text-md text-custom-400">
                        Michelle Appleton
                    </h2>
                    <p className="font-light text-custom-300 text-xs">
                        28 Jun 2020
                    </p>
                </div>
            </div>
        </div>
    );
}

export default User;