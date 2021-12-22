import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import './Login.css';

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let {email, password} = Object.fromEntries(formData);

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/profile");
    } catch {
      setError("Невалидено потребилтелско име или парола");
    }

    setLoading(false);
  }

  return (
    <div className="login-component">
        <Helmet>
          <title>Вход</title>
        </Helmet>
 
        <h2 className="text-center mb-4">Вход</h2>
        
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label>Имейл</label>
            <input type="email" name="email" required />
          </div>

          <div className="group">
            <label>Парола</label>
            <input type="password" name="password" required />
          </div>
       
          <button disabled={loading} className="w-100" type="submit">
            Вход
          </button>
        </form>
        <Link to='/forgot-password' className="button-action">Забравена парола?</Link>
 
        <Link to="/signup" className="button-action">Регистрация</Link>
    </div>
  )
}