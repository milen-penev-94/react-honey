import React from "react"
import Signup from "./components/SignUp/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import {
  Route,
  Routes, Navigate,
  Outlet
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddCategory from "./components/Category/Admin/Add/AddCategory";
import ListCategories from "./components/Category/Admin/List/ListCategories";
import UpdateCategory from "./components/Category/Admin/Update/UpdateCategory";
import AddProduct from "./components/Product/Admin/Add/AddProduct";
import UpdateProduct from "./components/Product/Admin/Update/UpdateProduct";
import ListProducts from "./components/Product/Admin/List/ListProducts";
import Products from "./components/Product/List/Products";
import Product from "./components/Product/Details/ProductDetails";

export default function App() {

  return(
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Dashboard />
          </PrivateRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <PrivateRoute>
              <UpdateProfile />
          </PrivateRoute>
          }
        />

        {/* Category */}
        <Route
          path="/admin/add-category"
          element={
            <PrivateRoute isAdmin="true">
              <AddCategory />
          </PrivateRoute>
          }
        />
        <Route
          path="/admin/list-category"
          element={
            <PrivateRoute isAdmin="true">
              <ListCategories />
          </PrivateRoute>
          }
        />
        <Route
          path="/admin/update-category/:id"
          element={
            <PrivateRoute isAdmin="true">
              <UpdateCategory />
          </PrivateRoute>
          }
        />

        {/* Product */}
        <Route
          path="/admin/add-product"
          element={
            <PrivateRoute isAdmin="true">
              <AddProduct />
          </PrivateRoute>
          }
        />

        <Route
          path="/admin/update-product/:id"
          element={
            <PrivateRoute isAdmin="true">
              <UpdateProduct />
          </PrivateRoute>
          }
        />
        
        <Route
          path="/admin/list-products"
          element={
            <PrivateRoute isAdmin="true">
              <ListProducts />
          </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>    
  );
}