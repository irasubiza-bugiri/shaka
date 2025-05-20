

const UnderDevelopment = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Page Under Development</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background-color: #f9fafb;
            text-align: center;
        }

        .avatar {
            width: 120px; /* increase this for bigger avatar */
            height: 120px;
            border-radius: 50%;
            background-image: url('/images/home.png'); /* Adjust this to your image path */
            background-size: cover;
            background-position: center;
            margin-bottom: 30px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        h1 {
            font-size: 32px;
            color: #333;
            margin-bottom: 10px;
        }

        p {
            color: #666;
            font-size: 20px;
        }
    
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left:0;
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
          `,
          }}
        />
      </head>
      <body>
        <div className="avatar"></div>
        <h1>Mwihangane mu gihe iyi page ikiri gukorwa neza.</h1>
        <p>
          Turi gukora cyane kugirango tuzarushyire ku mugaragaro vuba. Nyamuneka
          subira hano nyuma y'igihe!
        </p>
        <footer className="bottom-nav">
          <a href="home" className="active">
            Home
          </a>
          <a href="lost">Lost</a>
          {/* <a href="all">All</a> */}
          <a href="found">Found</a>
          <a href="notifications">Notifications</a>
        </footer>
      </body>
    </html>
  );
};

export default UnderDevelopment;