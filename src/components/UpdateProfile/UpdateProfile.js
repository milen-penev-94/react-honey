import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import ProfileDetails from '../../components/UpdateProfile/ProfileDetails/ProfileDetails'

const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setError("")
    
        if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
        }
    
        Promise.all(promises)
          .then(() => {
            setLoading(true)
            navigate("/")
          })
          .catch(() => {
            setError("Failed to update account")
          })
          .finally(() => {
            setLoading(false)
          })
      }
      
  return (
    <>
  
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
            </div>
              <div>         
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
            </div>

            <button disabled={loading} type="submit">
              Update
            </button>
          </form>

        <ProfileDetails/>

        <Link to="/">Cancel</Link>
    </>
  )
}
export default UpdateProfile;