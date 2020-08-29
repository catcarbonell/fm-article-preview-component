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
  }
  return(
    <div className="flex items-center justify-center h-screen bg-custom-100">
      
      <ShareButton toggleShare={toggleShare} />
      <Share shareActive={shareActive} setShareActive={setShareActive} />

      <div className="md:min-w-custom md:max-w-custom 
                      md:flex md:flex-row md:w-2/4 md:h-64
                      relative z-0 w-5/6 overflow-hidden bg-white rounded-lg shadow-lg">  
        <div className="md:w-64 w-full h-auto">
          <img className=" md:h-full md:object-left-top h-16 w-full object-cover" 
              src={drawers} 
              alt="A green drawer with a vase and some wheat strands on it" />
        </div>
        <div className="md:flex md:flex-col md:w-2/3 md:px-8 md:py-6
                        m-auto">
          <Description />
          <User />
        </div>
      </div>
    </div>
  );
}
export default App;
