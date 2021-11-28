import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <p>Email: {currentUser.email}</p>
          { currentUserData && <p>Name: {currentUserData.name}</p> }
          { currentUserData && <p>Last name: {currentUserData.lastName}</p> }

          { currentUserData.isAdmin && <p>Admin profile</p> }
          {error && <Alert variant="danger">{error}</Alert>}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      { currentUserData.isAdmin  && 
          <Link to="/add-category" >
            Add Category
          </Link> 
      }

      { currentUserData.isAdmin  && 
          <Link to="/list-category" >
            All categories
          </Link> 
      }
    </>
  )
}