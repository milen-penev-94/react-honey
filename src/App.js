import React from "react"
import Signup from "./components/SignUp/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddCategory from "./components/Category/Admin/Add/AddCategory";
import AdminCategories from "./components/Category/Admin/List/Categories";
import AdminUpdateCategory from "./components/Category/Admin/Update/UpdateCategory";
import AdminAddProduct from "./components/Product/Admin/Add/AddProduct";
import AdminUpdateProduct from "./components/Product/Admin/Update/UpdateProduct";
import AdminProducts from "./components/Product/Admin/List/Products";
import Products from "./components/Product/List/Products";
import ProductDetails from "./components/Product/Details/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";

export default function App() {

  return(
      <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />

          {/* Profile */}
          <Route path="/profile" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>

          <Route path="/update-profile" element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }/> 

          {/* Category */}
          <Route path="/admin/add-category" element={
            <PrivateRoute isAdmin="true">
                <AddCategory />
            </PrivateRoute>
          }/>

          <Route path="/admin/list-category" element={
            <PrivateRoute isAdmin="true">
              <AdminCategories />
            </PrivateRoute>
          }/>

          <Route path="/admin/update-category/:id" element={
            <PrivateRoute isAdmin="true">
              <AdminUpdateCategory />
            </PrivateRoute>
          }/>

          {/* Product */}
          <Route path="/admin/add-product"  element={
            <PrivateRoute isAdmin="true">
              <AdminAddProduct />
            </PrivateRoute>
          }/>

          <Route path="/admin/update-product/:id" element={
            <PrivateRoute isAdmin="true">
              <AdminUpdateProduct />
            </PrivateRoute>
          }/>
          
          <Route path="/admin/list-products" element={
            <PrivateRoute isAdmin="true">
              <AdminProducts />
            </PrivateRoute>
          }/>
        </Routes>
      </AuthProvider>    

      </BrowserRouter>  
  );
}