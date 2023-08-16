import Header from './Header';
import Nav from "./Nav"
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/post" element={<NewPost/>}></Route>
        <Route path="/post/:id" Component={PostPage} />
        <Route exact path='/about' element={< About />}></Route>
        <Route path="*" Component={Missing} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
