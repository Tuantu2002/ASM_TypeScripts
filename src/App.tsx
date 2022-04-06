import React from 'react';
import './App.css';
import { Route , Routes } from "react-router-dom";
import ClientLayout from './pages/Layout/LayOutClient';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import LayOutClientAdmin from './pages/Layout/LayoutAdmin';
import ProductFrom from './pages/admin/Product/ProductFrom';
import ProductList from './pages/admin/Product/ProductList';
function App() {
  return (
    <div className="App">


  <Routes>
  <Route path={'/'} element={<ClientLayout/>}>
  <Route index element={<HomePage/>} />
  <Route path="products">
    <Route index element={<ProductPage/>} />
          <Route index element={<LayOutClientAdmin />} />
        <Route path=":id" element={<ProductDetail/>} />                    
     <Route path ={'create'} element = {<ProductFrom/>} />
                         <Route path={'edit/:id'} element = {<ProductFrom />}  />
                    </Route>
  </Route>



  

  </Routes>
    </div>
  );
}

export default App;
