import React from 'react';
import Description from './Components/Description';
import User from './Components/User';
import './tailwind.output.css';
import drawers from './Assets/drawers.jpg';
const App = () => {
  return(
    <div className="flex items-center justify-center h-screen bg-custom-100"> 
      <div className="w-5/6 overflow-hidden bg-white mt-10 rounded-lg shadow-lg">
        <img className="w-full" src={drawers} alt="A green drawer with a vase and some wheat strands on it" />
        <Description />
        <User />
      </div>
    </div>
  );
}
export default App;
