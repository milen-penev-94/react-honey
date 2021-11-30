import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, currentUserData, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="dashboard-component">
      <h2 className="text-center mb-4">Profile</h2>
      <p>Email: {currentUser.email}</p>
      { currentUserData && <p>Name: {currentUserData.name}</p> }
      { currentUserData && <p>Last name: {currentUserData.lastName}</p> }

      { currentUserData.isAdmin && <p>Admin profile</p> }
      {error && <Alert variant="danger">{error}</Alert>}
      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
        Update Profile
      </Link>
  
      <div className="w-100 text-center mt-2">
        <button onClick={handleLogout}>
          Log Out
        </button>
      </div>

      { currentUserData.isAdmin  && 
          <Link to="/admin/list-category" className="profile-action-button">
            <span className="icon"><FontAwesomeIcon icon={faList} /></span>
            <span className="label">Всички категории</span>
          </Link> 
      }

      { currentUserData.isAdmin  && 
          <Link to="/admin/list-products" className="profile-action-button">
            <span className="icon"><FontAwesomeIcon icon={faList} /></span>
            <span className="label">Всички продукти</span>
          </Link> 
      }     
    </div>
  )
}