import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({email}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/reset', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }

      const data = await response.json();
      console.log('Password reset successful:', data.message);
    } catch (error) {
      console.error('Error resetting password:', error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword">
              <strong>Current Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Current Password"
              autoComplete="off"
              name="currentPassword"
              className="form-control rounded-0"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
              className="form-control rounded-0"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword">
              <strong>Confirm New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter New Password again"
              name="confirmPassword"
              className="form-control rounded-0"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ChangePassword;