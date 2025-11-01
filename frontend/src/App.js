import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import Home from './component/Home';
import Blog from './component/Blog';
import Research from './component/Research';
import About from './component/About';
import Blog1 from './component/Blog1';
import Blog2 from './component/Blog2';
import Blog3 from './component/Blog3';
import Blog4 from './component/Blog4';
import ChatBot from './component/chatbot';
import SignIn from './component/signin';
import SignUp from './component/signup';
import Chat from './component/Chat';

function App() {

  

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Research' element={<Research />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Blog/Blog1' element={<Blog1 />} />
      <Route path='/Blog/Blog2' element={<Blog2 />} />
      <Route path='/Blog/Blog3' element={<Blog3 />} />
      <Route path='/Blog/Blog4' element={<Blog4 />} />
      <Route path='/About' element={<About  />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/chat' element={<Chat />} />
    
       
    </Routes>

    </BrowserRouter>
    
    
    </>
  );
}

export default App;