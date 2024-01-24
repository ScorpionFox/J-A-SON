import { createUseStyles } from 'react-jss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import Album from './components/Album';
import Users from './pages/Users';
import User from './pages/User';
import PostList from './components/posts/PostList';

const styles = createUseStyles({
  content: {
    top: '100px',
    position: 'absolute',
    left: '100px',
  },
});

function App() {
  const classes = styles();

  return (
    <>
      <NavBar />
      <SideBar />
      <div className={classes.content}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:id" element={<User />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="*" element={<Home />} /> {/*Default website aka Home*/}
        </Routes>
      </div>
    </>
  );
}

export default App;