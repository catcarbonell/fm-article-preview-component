import React, { useState } from 'react';
import Description from './Components/Description';
import User from './Components/User';
import ShareButton from './Components/ShareButton';
import Share from './Components/Share';
import drawers from './Assets/drawers.jpg';
import './tailwind.output.css';

const App = () => {
  const [ shareActive, setShareActive ] = useState(false);
  let toggleShare = () => {
      setShareActive(!shareActive);
      console.log(shareActive);
  }
  return(
    <div className="flex items-center justify-center h-screen bg-custom-100"> 
      <div className="relative z-0 w-5/6 overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="h-56 w-full object-cover object-top" 
            src={drawers} 
            alt="A green drawer with a vase and some wheat strands on it" />
        <Description />
        <User />
        <Share shareActive={shareActive} setShareActive={setShareActive} />
        <ShareButton toggleShare={toggleShare} />
      </div>
    </div>
  );
}
export default App;
