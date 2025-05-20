import { Link } from 'react-router-dom';

export default function WelcomePage ()  {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Arial', sans-serif",
      display: 'flex',
      overflow:'hidden',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#1E90FF',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div className="avatar-container" style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
        overflow: 'hidden',
        border: '3px solid rgba(255, 255, 255, 0.3)',
      }}>
        <img
          src="/images/welcome.png"
          alt="Avatar"
          className="avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="content" style={{
        maxWidth: '500px',
        padding: '0 40px 40px',
      }}>
        <h1 style={{
          fontSize: '28px',
          marginBottom: '30px',
          fontWeight: 'normal',
        }}>
          Wabuze icyangombwa cyangwa wacyibonye
        </h1>
        <p style={{
          fontSize: '16px',
          marginBottom: '20px',
          lineHeight: 1.5,
        }}>
          Dukorane hamwe kugirango ubone icyangombwa cyawe cyabuze cyangwa se urangishe ibyo watoye
        </p>
        <Link
          to="/register/step1"
          className="btn"
          style={{
            display: 'inline-block',
            backgroundColor: 'white',
            color: '#1E90FF',
            padding: '12px 30px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '20px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          })}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, {
            transform: 'translateY(0)',
            boxShadow: 'none',
          })}
        >
          Tangira
        </Link>
      </div>
    </div>
  );
};
