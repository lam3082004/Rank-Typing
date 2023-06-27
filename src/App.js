import React, { useState } from 'react';
import Header from './components/Header';
import LeaderBoard from './components/LeaderBoard';


function App() {
  
  return (
    <div className='max-w-screen-xl mx-auto p-2.5 sm:p-5 sm:px-10'>
      <Header/>
      <LeaderBoard/>
    </div>
    
  );
}

export default App;
