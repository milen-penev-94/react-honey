import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import Signup from "./components/SignUp/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import { useAuth } from "./contexts/AuthContext"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {

  return(
    <Container>
     
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>   
            
    </Container>
  );
}