import React from 'react';
import avatar from '../Assets/avatar-michelle.jpg';

const User = () => {
    return(
        <div className="flex flex-row justify-start m-2 p-2">
            <img className="w-10 rounded-full" src={avatar} alt="User Michelle Appleton" />
            <div className="ml-2 pl-2">
                <h2 className="font-bold text-md text-custom-400">
                Michelle Appleton
                </h2>
                <p className="font-light text-custom-300 text-xs">
                    28 Jun 2020
                </p>
            </div>
          
            {/* Share Icon  */}
        </div>
    );
}

export default User;