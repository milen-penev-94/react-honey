import React, { useRef, useState } from 'react';
import {Helmet} from 'react-helmet';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  
  return (
    <div className="signup-component">
      <Helmet>
        <title>Регистрация</title>
      </Helmet>

      <h2 className="text-center mb-4">Регистрация</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label>Имеил</label>
          <input type="email" ref={emailRef} required />
        </div>

        <div className="group">
          <label>Парола</label>
          <input type="password" ref={passwordRef} required />
        </div>

        <div className="group">
          <label>Повтори парола</label>
          <input type="password" ref={passwordConfirmRef} required />
        </div>
        
        <button disabled={loading} className="w-100" type="submit">
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