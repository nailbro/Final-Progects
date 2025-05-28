import React, { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  const { user, setUser, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    if (!user || !window.confirm('Are you sure you want to delete your account?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setUser(null);
        navigate('/');
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; 
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <div className="profile-actions">
          <button onClick={handleLogout} className="logout-btn">
            Sign Out
          </button>
        </div>
      </div>

      <div className="profile-content">
        <div className="user-info-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>First Name</label>
              <div className="info-value">{user.firstName}</div>
            </div>
            <div className="info-item">
              <label>Last Name</label>
              <div className="info-value">{user.lastName}</div>
            </div>
            <div className="info-item">
              <label>Email</label>
              <div className="info-value">{user.email}</div>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <div className="info-value">{user.phone || 'Not specified'}</div>
            </div>
          </div>
        </div>

        <div className="danger-zone">
          <h3>Danger Zone</h3>
          <button onClick={handleDeleteAccount} className="delete-btn">
            Delete Account Permanently
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;