import React, { useState, type ChangeEvent } from 'react';

interface LostCredential {
  documentType: string;
  documentId: string;
  description: string;
  ownerName: string;
  lostLocation: string;
  lostDate: string;
}

interface LostDocumentsProps {
  lostCredentials: LostCredential[];
}

const LostDocuments: React.FC<LostDocumentsProps> = ({ lostCredentials }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCredentials, setFilteredCredentials] = useState(lostCredentials);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);

    const filtered = lostCredentials.filter((credential) =>
      [
        credential.documentType,
        credential.documentId,
        credential.description,
        credential.ownerName,
        credential.lostLocation,
        credential.lostDate,
      ].some((field) => field.toLowerCase().includes(query))
    );

    setFilteredCredentials(filtered);
  };

  return (
    <html>
      <head>
        <title>Find with AI - Lost</title>
        <link rel="icon" type="image/png" href="/images/welcome.png" />
        <link rel="stylesheet" href="/css/styles.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

              .search-box {
                padding: 15px;
              }

              .search-box input {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border-radius: 8px;
                border: 1px solid #ccc;
              }

              .document-card {
                display: flex;
                gap: 10px;
                margin: 10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 6px;
                background-color: #f9f9f9;
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

              #noResults {
                text-align: center;
                padding: 20px;
              }

              #noResults img {
                width: 150px;
                opacity: 0.5;
              }

              #noResults p {
                font-size: 18px;
                color: gray;
                margin-top: 10px;
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

        <div className="search-box">
          <input
            type="text"
            placeholder="Shakisha ibyangombwa byabuze..."
            id="searchInput"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <h2 style={{ paddingLeft: '15px' }}>Ibyangombwa byabuze</h2>

        {filteredCredentials.map((credential, index) => (
          <div className="document-card lost" key={index}>
            <div className="icon id-icon"></div>
            <div className="text">
              <strong>
                {credential.documentType} - {credential.documentId}
              </strong>
              <p>{credential.description}</p>
              <small>Byabuze na: {credential.ownerName}</small>
              <br />
              <small>Aho byabuze: {credential.lostLocation}</small>
              <br />
              <small>Byabuze ku: {credential.lostDate}</small>
            </div>
          </div>
        ))}

        <div id="noResults" style={{ display: filteredCredentials.length === 0 ? 'block' : 'none' }}>
          <img src="/images/not-found.png" alt="Nta bisubizo bibonetse" />
          <p>Nta byangombwa byahuye n'ibyo ushakisha bibonetse.</p>
        </div>

        <footer className="bottom-nav">
          <a href="home">Urugo</a>
          <a href="lost" className="active">
            Byabuze
          </a>
          <a href="found">Babonetse</a>
          <a href="notifications">Amatangazo</a>
        </footer>
      </body>
    </html>
  );
};

export default LostDocuments;