import React from "react"
import Signup from "./components/SignUp/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import {
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddCategory from "./components/Category/Add/AddCategory";
import ListCategories from "./components/Category/List/ListCategories";
import UpdateCategory from "./components/Category/Update/UpdateCategory";

export default function App() {

  return(
      <>
        <Header />
        <div className="auto-container">
        <AuthProvider>
          <Routes>
            <Route
              path="/"
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
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
              </PrivateRoute>
              }
            />
            <Route
              path="/add-category"
              element={
                <PrivateRoute isAdmin="true">
                  <AddCategory />
              </PrivateRoute>
              }
            />
              <Route
              path="/update-category/:id"
              element={
                <PrivateRoute isAdmin="true">
                  <UpdateCategory />
              </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/list-category" element={<ListCategories />} />
          </Routes>
        </AuthProvider> 
        </div>  

        {/* <Footer /> */}
      </>      
  );
}