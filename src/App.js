import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom"
import HomePageContainer from './Components/Home/HomePageContainer';
import TextPageContainer from './Components/TextPage/TextPageContainer';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <div className='App_content'>
        <Routes>
          <Route path='/' element={<HomePageContainer />} />
          <Route path='/Home' element={<HomePageContainer />} />
          <Route path='TextPage/:pageId' element={<TextPageContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
