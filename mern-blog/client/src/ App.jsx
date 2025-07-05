import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}
