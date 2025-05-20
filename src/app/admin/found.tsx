import React, { useState, type ChangeEvent } from 'react';

interface FoundBy {
  name: string;
}

interface FoundCredential {
  documentType: string;
  documentId: string;
  description: string;
  foundBy: FoundBy;
  foundLocation: string;
  foundDate: string;
}

interface FoundDocumentsProps {
  foundCredentials: FoundCredential[];
}

const FoundDocuments: React.FC<FoundDocumentsProps> = ({ foundCredentials }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCredentials, setFilteredCredentials] = useState(foundCredentials);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);

    const filtered = foundCredentials.filter((credential) =>
      [
        credential.documentType,
        credential.documentId,
        credential.description,
        credential.foundBy.name,
        credential.foundLocation,
        credential.foundDate,
      ].some((field) => field.toLowerCase().includes(query))
    );

    setFilteredCredentials(filtered);
  };

  return (
    <html>
      <head>
        <title>Find with AI - Found</title>
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
                background: url('/images/found-icon.png') no-repeat center;
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
            <span className="highlight">Shakisha</span> hifashishijwe AI
          </h1>
        </header>

        <div className="search-box">
          <input
            type="text"
            placeholder="Shakisha ibyabonetse..."
            id="searchInput"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <h2 style={{ paddingLeft: '15px' }}>Ibyangombwa byabonetse</h2>

        {filteredCredentials.map((credential, index) => (
          <div className="document-card found" key={index}>
            <div className="icon id-icon"></div>
            <div className="text">
              <strong>
                {credential.documentType} - {credential.documentId}
              </strong>
              <p>{credential.description}</p>
              <small>Cyabonetse na: {credential.foundBy.name}</small>
              <br />
              <small>Aho cyabonetse: {credential.foundLocation}</small>
              <br />
              <small>Itariki cyabonetseho: {credential.foundDate}</small>
            </div>
          </div>
        ))}

        <div id="noResults" style={{ display: filteredCredentials.length === 0 ? 'block' : 'none' }}>
          <img src="/images/not-found.png" alt="Nta byangombwa byabonetse" />
          <p>Nta cyangombwa gihuye n'ibishakishwa cyabonetse.</p>
        </div>

        <footer className="bottom-nav">
          <a href="home">Ahabanza</a>
          <a href="lost">Cyabuze</a>
          {/* <a href="all">Byose</a> */}
          <a href="found" className="active">
            Cyabonetse
          </a>
          <a href="notifications">Amakuru</a>
        </footer>
      </body>
    </html>
  );
};

export default FoundDocuments;