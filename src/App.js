import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import CategoryDetails from './pages/CategoryDetails';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:category" element={<CategoryDetails />} />
        <Route path="/blogs/:blogID" element={<SingleBlog />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </Layout>
  );
}

export default App;
