import React from 'react'
import Signup from './components/SignUp/Signup'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Homepage from './components/Homepage/Homepage'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Profile from './components/Profile/Profile'
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PofileOrders from './components/Profile/PofileOrders/PofileOrders';
import AuthPrivateRoute from './components/PrivateRoute/AuthPrivateRoute';
import CartPrivateRoute from './components/PrivateRoute/CartPrivateRoute';
import AdminOrders from './components/Orders/Admin/List/Orders';
import AdminUpdateOrders from './components/Orders/Admin/Update/UpdateOrder';
import AddCategory from './components/Category/Admin/Add/AddCategory';
import AdminCategories from './components/Category/Admin/List/Categories';
import AdminUpdateCategory from './components/Category/Admin/Update/UpdateCategory';
import AdminAddProduct from './components/Product/Admin/Add/AddProduct';
import AdminUpdateProduct from './components/Product/Admin/Update/UpdateProduct';
import AdminProducts from './components/Product/Admin/List/Products';
import AdminMessages from './components/Contacts/Admin/List/Messages';
import Products from './components/Product/List/Products';
import Category from './components/Category/List/Category'
import ProductDetails from './components/Product/Details/ProductDetails';
import Checkout from './components/Checkout/Checkout';
import SuccessCheckout from './components/Checkout/Success';
import Cart from './components/Cart/Cart';

export default function App() {

  return(
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin/messages" element={<AuthPrivateRoute isAdmin="true"><AdminMessages /></AuthPrivateRoute>} />

           {/* Profile */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile/orders" element={<AuthPrivateRoute><PofileOrders /></AuthPrivateRoute>} />

          {/* Checkout */}
          <Route path="/checkout" element={<CartPrivateRoute><Checkout /></CartPrivateRoute>}/>
          <Route path="/checkout/success/:orderNumber" element={<SuccessCheckout />} />

          {/* Profile */}
          <Route path="/profile" element={<AuthPrivateRoute><Profile /></AuthPrivateRoute>}/>
          <Route path="/update-profile" element={<AuthPrivateRoute> <UpdateProfile /></AuthPrivateRoute>}/> 

          {/* Orders */}
          <Route path="/admin/orders" element={<AuthPrivateRoute isAdmin="true"><AdminOrders /></AuthPrivateRoute>}/>
          <Route path="/admin/update-order/:id" element={<AuthPrivateRoute><AdminUpdateOrders /></AuthPrivateRoute>}/> 

          {/* Category */}
          <Route path="/admin/add-category" element={<AuthPrivateRoute isAdmin="true"><AddCategory /></AuthPrivateRoute>}/>
          <Route path="/admin/list-category" element={<AuthPrivateRoute isAdmin="true"><AdminCategories /></AuthPrivateRoute>}/>
          <Route path="/admin/update-category/:id" element={<AuthPrivateRoute isAdmin="true"><AdminUpdateCategory /></AuthPrivateRoute>}/>
          <Route path="/category/:id/:page" element={<Category />}/>

          {/* Product */}
          <Route path="/admin/add-product"  element={<AuthPrivateRoute isAdmin="true"><AdminAddProduct /></AuthPrivateRoute>}/>
          <Route path="/admin/update-product/:id" element={<AuthPrivateRoute isAdmin="true"><AdminUpdateProduct /></AuthPrivateRoute>}/>
          <Route path="/admin/list-products" element={<AuthPrivateRoute isAdmin="true"><AdminProducts /></AuthPrivateRoute>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </AuthProvider>    
    </BrowserRouter>  
  );
}