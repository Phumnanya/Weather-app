import React from 'react';
import './App.css';
import { Weatherprovider } from './container components/Context';
import Searching from './container components/Search';
import Main from './container components/Main';
import Highlights from './container components/Highlights';

function App() {
  return (
     <Weatherprovider>
      <Searching />
     <div className='container'>
     <Main />
     <Highlights />
     </div>
     </Weatherprovider>
  );
}

export default App;