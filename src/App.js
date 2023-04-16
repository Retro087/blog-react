import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import { Route, Routes } from "react-router-dom"
import HomePageContainer from './Components/Home/HomePageContainer';
import TextPageContainer from './Components/TextPage/TextPageContainer';
import MyWorks from './Components/MyWorks/MyWorks';
import AuthContainer from './Components/Auth/AuthContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import CreatePostContainer from './Components/CreatePost/CreatePostContainer';

function App() {
  return (
    <div className="App">
      <SideBar />
      <HeaderContainer />
      <div className='App_content'>
        <Routes>
          <Route path='/' element={<HomePageContainer />} />
          <Route path='/Home/*' element={<HomePageContainer />} />
          <Route path='TextPage/:pageId' element={<TextPageContainer/>}/>
          <Route path='/MyWorks/*' element={<MyWorks />} />
          <Route path='/Auth/*' element={<AuthContainer />} />
          <Route path='/Profile/*' element={<ProfileContainer />} />
          <Route path='/CreatePost/*' element={<CreatePostContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
