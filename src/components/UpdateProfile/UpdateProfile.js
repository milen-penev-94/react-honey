import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ProfileDetails from '../../components/UpdateProfile/ProfileDetails/ProfileDetails';
import './UpdateProfile.css';

const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match");
        }
    
        const promises = []
        setLoading(true)
        setError("")
    
        if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value));
        }
    
        Promise.all(promises)
          .then(() => {
            setLoading(true);
            navigate("/");
          })
          .catch(() => {
            setError("Failed to update account");
          })
          .finally(() => {
            setLoading(false);
          })
      }
      
  return (
    <>
      <div className="auto-container update-profile-component">
        <h2>Промяна на профила</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div div className="col-lg-12 col-md-12 col-sm-12">
              <label>Имеил</label>
              <input type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </div>
          </div>
          <div className="row">
            <div div className="col-lg-6 col-md-6 col-sm-12">
              <label>Парола</label>
              <input type="password" ref={passwordRef} placeholder="Оставете полето празно, за да запазите същата парола" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">         
              <label>Повтори парола</label>
              <input type="password" ref={passwordConfirmRef} placeholder="Оставете полето празно, за да запазите същата парола"/>
            </div>
          </div>

          <button disabled={loading} type="submit">Редактирай</button>
        </form>

        <Link to="/">Назад</Link>
      </div>

      <ProfileDetails />
    </>
  )
}
export default UpdateProfile;