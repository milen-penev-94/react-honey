import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPen, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser, currentUserData, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="profile-component profile-container row">
      <div className="col-lg-7 col-md-7 col-sm-12">
        <h2>Профил</h2>
        <p>Имеил: {currentUser.email}</p>

        { currentUserData && <p>Име: {currentUserData.name}</p> }
        { currentUserData && <p>Фамилия: {currentUserData.lastName}</p> }

        {error && <Alert variant="danger">{error}</Alert>}
        <div className="buttons">
          <Link to="/update-profile" className="profile-action-button">
            <span className="icon"><FontAwesomeIcon icon={faPen} /></span>
            <span className="label">Промени профила</span>
          </Link>

          <Link to="/profile/orders" className="profile-action-button">
            <span className="icon"><FontAwesomeIcon icon={faList} /></span>
            <span className="label">Поръчки</span>
          </Link>
      
          <button onClick={handleLogout} className="profile-action-button">
            <span className="label">Изход</span>
          </button>
        </div>
      </div>

      {currentUserData.isAdmin && 
      
      <div className="col-lg-5 col-md-5 col-sm-12 admin-menu">
        <h2>Админ меню</h2> 

        <Link to="/admin/orders" className="profile-action-button">
          <span className="icon"><FontAwesomeIcon icon={faFile} /></span>
          <span className="label">Поръчки</span>
        </Link> 
  
    
        <Link to="/admin/list-category" className="profile-action-button">
          <span className="icon"><FontAwesomeIcon icon={faList} /></span>
          <span className="label">Категории</span>
        </Link> 
    
        <Link to="/admin/list-products" className="profile-action-button">
          <span className="icon"><FontAwesomeIcon icon={faList} /></span>
          <span className="label">Продукти</span>
        </Link> 

        <Link to="/admin/messages" className="profile-action-button">
          <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
          <span className="label">Съобщения</span>
        </Link> 
      </div> 
      }
    </div>
  )
}

export default Profile;