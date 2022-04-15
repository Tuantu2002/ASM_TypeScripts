import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "./pages/Layout/LayOutClient";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import ProductFrom from "./pages/admin/Product/ProductFrom";
import ProductList from "./pages/admin/Product/ProductList";
import Dashboard from "./pages/admin/dashboard";

import LayOutAdmin from "./pages/Layout/LayoutAdmin";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* ClientLayout */}
        <Route path={"/"} element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path=":_id" element={<ProductDetail />} />
          </Route>
          
        </Route>
        <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
        {/*admin layout */}

        <Route path="admin" element={<LayOutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path="create" element={<ProductFrom />} />
            <Route path={'edit/:_id'} element={<ProductFrom />} />
          </Route>
          {/* <Route path="categories">
                        <Route index element={<CategoryList/>} />
                        <Route path="create" element={<CategoryForm/>}/>
                        <Route path="edit/:id" element={<CategoryForm/>}/>
                    </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
