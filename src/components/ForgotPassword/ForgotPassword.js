import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let {email} = Object.fromEntries(formData);

    try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(email)
        setMessage("Изпратили сме ви имеил с допълнителни инструкции.")
       setTimeout(() => {
            navigate("/login")
          }, 4000);
    } catch {
        setError("Неуспешно възстановяване на парола")
    }

    setLoading(false)
    }
    return (
      <div className="forgot-password-component">
        <Helmet>
          <title>Забравена парола</title>
        </Helmet>

        <h2 className="text-center mb-4">Забравена парола</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>

          <label>Имеил</label>
          <input type="email" name="email" required />

          <button disabled={loading} type="submit">
            Възстановяване на парола
          </button>
        </form>

        <Link to="/login" className="button-link">Вход</Link>

        <Link to="/signup" className="button-link">Регистрация</Link>
      </div>
      )
}

export default ForgotPassword;