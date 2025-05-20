import React from 'react';
import '../../styles/admin/notifications.css'

interface LostCredential {
  documentType: string;
  documentId: string;
  ownerName: string;
}

interface Match {
  lostCredential: LostCredential;
  verified: boolean;
  returned: boolean;
  matchDetails?: string;
  contactInfo?: string;
  formattedDate: string;
}

interface NotificationsPageProps {
  matches: Match[];
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({ matches = [] }) => {
  return (
    <div>
      <header className="top-header" >
        <h1><span className="highlight">Shaka</span> na AI</h1>
      </header>

      <div className="title-bar">
        <h2>Amatangazo</h2>
      </div>


      {matches.map((match, index) => (
        <div key={index} className="document-card" >
          <div className="icon id-icon" ></div>
          <div className="text" >
            <strong>
              {match.lostCredential.documentType} Ihuye n'ibyo waburanye!
              {match.verified ? (
                <span className="status-badge verified" >
                  BIRAMENYEKANYE
                </span>
              ) : (
                <span className="status-badge pending" >
                  BIRACYATEGEREJWE
                </span>
              )}
              {match.returned && (
                <span className="status-badge returned" >
                  BYASUBIWE
                </span>
              )}
            </strong>
            <p >ID y'ibyangombwa: {match.lostCredential.documentId}</p>
            <p >Nyir'ibyangombwa: {match.lostCredential.ownerName}</p>
            {match.matchDetails && <p>{match.matchDetails}</p>}
            {match.contactInfo && <p >Kontaro: {match.contactInfo}</p>}
            <small>{match.formattedDate}</small>
            <div style={{ marginTop: '8px' }}>
              {/* Links commented out as in original JSP */}
              {/* <a href={`/admin/found?id=${match.foundCredential.id}`} style={{ color: '#007AFF' }}>Reba Ikintu Cyabonetse</a> | */}
              {/* <a href={`/admin/lost?id=${match.lostCredential.id}`} style={{ color: '#007AFF' }}>Reba Raporo y'ibyangombwa byabuze</a> */}
            </div>
          </div>
        </div>
      ))}

      <footer className="bottom-nav" >
        <a href="/admin/home"  >Urugo</a>
        <a href="/admin/lost"  >Byabuze</a>
        <a href="/admin/found" >Babonetse</a>
        <a href="/admin/notifications" className="active" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: 'bold' }}>Amatangazo</a>
      </footer>
    </div>
  );
};

export default NotificationsPage;