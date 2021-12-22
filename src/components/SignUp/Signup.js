import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let {email, password, confirmPassword} = Object.fromEntries(formData);

    if (password !== confirmPassword) {
      return setError("Паролите несъвпадат");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch {
      setError("Неуспешна регистрация");
    }

    setLoading(false);
  }
  
  return (
    <div className="signup-component">
      <Helmet>
        <title>Регистрация</title>
      </Helmet>

      <h2>Регистрация</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label>Имейл</label>
          <input type="email" name="email" required />
        </div>

        <div className="group">
          <label>Парола</label>
          <input type="password" name="password"required />
        </div>

        <div className="group">
          <label>Повтори парола</label>
          <input type="password" name="confirmPassword" required />
        </div>
        
        <button disabled={loading}  type="submit">
          Регистрация
        </button>
      </form>
    
      <div className="login">
        Имате регистриран профил? <br /> 
        <Link to="/login" className="button-login">Вход</Link>
      </div>
    </div>
  )
}