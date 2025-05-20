import React from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
  verified: boolean;
  createdAt: string;
}

interface UserProfileProps {
  user: User | null;
  onLogout: () => void;
  onRedirect: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, onRedirect }) => {
  if (!user) {
    onRedirect();
    return null;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Profile</title>
        <link rel="icon" type="image/png" href="/images/welcome.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(-45deg, #e0f7fa, #80deea, #b2ebf2, #4dd0e1);
                background-size: 400% 400%;
                animation: gradientShift 12s ease infinite;
                min-height: 100vh;
              }

              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }

              .profile-card {
                background: #ffffffdd;
                padding: 2rem;
                border-radius: 20px;
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
                max-width: 450px;
                width: 100%;
                animation: fadeIn 1s ease forwards;
                opacity: 0;
              }

              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }

              .info {
                margin-bottom: 1rem;
              }

              .info label {
                font-weight: bold;
                display: block;
                color: #555;
              }

              .info span {
                color: #222;
              }

              .btn {
                background: #00796b;
                color: white;
                padding: 12px 16px;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: background 0.3s ease;
                width: 100%;
                font-size: 16px;
                margin-top: 20px;
              }

              .btn:hover {
                background: #004d40;
              }

              .container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 60px 20px;
                min-height: 100vh;
              }

              @media (max-width: 500px) {
                .profile-card {
                  padding: 1.5rem;
                }

                .btn {
                  padding: 10px 14px;
                  font-size: 15px;
                }
              }

              /* Tailwind-equivalent styles */
              .profile-header {
                font-size: 1.5rem;
                line-height: 2rem;
                text-align: center;
                font-weight: 600;
                color: #2d6a76;
                margin-bottom: 1rem;
              }

              .icon-margin-right {
                margin-right: 0.5rem;
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="container">
          <div className="profile-card">
            <h2 className="profile-header">Welcome, {user.name}</h2>
            <div className="info">
              <label>Email:</label>
              <span>{user.email}</span>
            </div>
            <div className="info">
              <label>Phone:</label>
              <span>{user.phone}</span>
            </div>
            <div className="info">
              <label>Role:</label>
              <span>{user.role}</span>
            </div>
            <div className="info">
              <label>Verified:</label>
              <span>{user.verified ? 'Yes' : 'No'}</span>
            </div>
            <div className="info">
              <label>Joined:</label>
              <span>{user.createdAt}</span>
            </div>
            <button className="btn" onClick={onLogout}>
              <i className="fas fa-sign-out-alt icon-margin-right"></i> Sign Out
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default UserProfile;