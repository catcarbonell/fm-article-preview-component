import React from 'react';
import avatar from '../Assets/avatar-michelle.jpg';

const User = () => {
    return(
        <div className="flex flex-row w-full h-16">
            <div className="flex flex-row justify-start items-center">
                <img className="w-10 h-10 rounded-full shadow" src={avatar} alt="User Michelle Appleton" />
                <div className="ml-4">
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