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
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} exact />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/category/:category"
        element={
          <Layout>
            <CategoryDetails />
          </Layout>
        }
      />
      <Route
        path="/blogs/:blogID"
        element={
          <Layout secondary={true}>
            <SingleBlog />
          </Layout>
        }
      />
      <Route
        path="/error"
        element={
          <Layout>
            <Fallback />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate replace to="/error" />} />
    </Routes>
  );
}

export default App;
