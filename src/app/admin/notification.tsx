import React from 'react';

interface Credential {
  id: string;
  documentType: string;
  documentId: string;
  ownerName: string;
}

interface Match {
  lostCredential: Credential;
  foundCredential?: Credential;
  verified: boolean;
  returned: boolean;
  matchDetails?: string;
  contactInfo?: string;
  formattedDate: string;
}

interface NotificationsProps {
  matches: Match[];
}

const Notifications: React.FC<NotificationsProps> = ({ matches }) => {
  return (
    <html>
      <head>
        <title>Shaka na AI - Amatangazo</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .top-header {
                background: linear-gradient(135deg, #4A90E2, #007AFF);
                padding: 20px;
                text-align: center;
                color: white;
                font-family: 'Segoe UI', sans-serif;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              }

              .top-header h1 {
                margin: 0;
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 1px;
              }

              .highlight {
                color: #FFD700;
              }

              .title-bar {
                padding: 15px;
              }

              .title-bar h2 {
                font-size: 24px;
                margin: 0;
                font-family: 'Segoe UI', sans-serif;
              }

              .document-card {
                display: flex;
                gap: 10px;
                margin: 10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 6px;
                background-color: #f1f8ff;
              }

              .icon {
                width: 40px;
                height: 40px;
                background-color: #ddd;
                border-radius: 50%;
              }

              .id-icon {
                background: url('/images/id-icon.png') no-repeat center;
                background-size: contain;
              }

              .text strong {
                font-size: 16px;
              }

              .text p {
                margin: 5px 0;
              }

              .bottom-nav {
                position: fixed;
                bottom: 0;
                width: 100%;
                background-color: #fff;
                display: flex;
                justify-content: space-around;
                border-top: 1px solid #ccc;
                padding: 10px 0;
              }

              .bottom-nav a {
                color: #444;
                text-decoration: none;
                font-weight: bold;
              }

              .bottom-nav a.active {
                color: #007AFF;
              }

              .status-badge {
                display: inline-block;
                padding: 2px 6px;
                border-radius: 4px;
                font-size: 12px;
                margin-left: 8px;
              }

              .verified {
                background-color: #4CAF50;
                color: white;
              }

              .pending {
                background-color: #FFC107;
                color: black;
              }

              .returned {
                background-color: #2196F3;
                color: white;
              }
            `,
          }}
        />
      </head>
      <body>
        <header className="top-header">
          <h1>
            <span className="highlight">Shaka</span> na AI
          </h1>
        </header>

        <div className="title-bar">
          <h2>Amatangazo</h2>
        </div>

        {matches.map((match, index) => (
          <div className="document-card" key={index}>
            <div className="icon id-icon"></div>
            <div className="text">
              <strong>
                {match.lostCredential.documentType} Ihuye n'ibyo waburanye!
                {match.verified ? (
                  <span className="status-badge verified">BIRAMENYEKANYE</span>
                ) : (
                  <span className="status-badge pending">BIRACYATEGEREJWE</span>
                )}
                {match.returned && <span className="status-badge returned">BYASUBIWE</span>}
              </strong>

              <p>ID y'ibyangombwa: {match.lostCredential.documentId}</p>
              <p>Nyir'ibyangombwa: {match.lostCredential.ownerName}</p>

              {match.matchDetails && <p>{match.matchDetails}</p>}
              {match.contactInfo && <p>Kontaro: {match.contactInfo}</p>}

              <small>{match.formattedDate}</small>

              <div style={{ marginTop: '8px' }}>
                {/* <a href="/admin/found?id={match.foundCredential?.id}" style={{ color: '#007AFF' }}>
                  Reba Ikintu Cyabonetse
                </a> | */}
                {/* <a href="/admin/lost?id={match.lostCredential.id}" style={{ color: '#007AFF' }}>
                  Reba Raporo y'ibyangombwa byabuze
                </a> */}
              </div>
            </div>
          </div>
        ))}

        <footer className="bottom-nav">
          <a href="/admin/home">Urugo</a>
          <a href="/admin/lost">Byabuze</a>
          <a href="/admin/found">Babonetse</a>
          <a href="/admin/notifications" className="active">
            Amatangazo
          </a>
        </footer>
      </body>
    </html>
  );
};

export default Notifications;