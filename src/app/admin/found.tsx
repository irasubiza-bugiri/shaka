import React, { useState } from 'react';
import '../../styles/admin/found.css';

interface FoundCredential {
  documentType: string;
  documentId: string;
  description: string;
  foundBy: { name: string };
  foundLocation: string;
  foundDate: string;
}

interface FoundPageProps {
  foundCredentials: FoundCredential[];
}

const FoundPage = ({ foundCredentials = [] }: FoundPageProps) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredCredentials = foundCredentials.filter(credential =>
    `${credential.documentType} ${credential.documentId} ${credential.description} ${credential.foundBy.name} ${credential.foundLocation} ${credential.foundDate}`
      .toLowerCase()
      .includes(searchText)
  );

  const noResults = filteredCredentials.length === 0 && searchText !== '';

  return (
    <div>
      <header className="top-header">
        <h1>
          <span className="highlight" >Shakisha</span> hifashishijwe AI
        </h1>
      </header>

      <div className="search-box" >
        <input
          type="text"
          placeholder="Shakisha ibyabonetse..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <h2 >Ibyangombwa byabonetse</h2>

      {filteredCredentials.map((credential, index) => (
        <div key={index} className="document-card found" >
          <div className="icon id-icon"></div>
          <div className="text" style={{ fontSize: '16px' }}>
            <strong>{credential.documentType} - {credential.documentId}</strong>
            <p style={{ margin: '5px 0' }}>{credential.description}</p>
            <small>Cyabonetse na: {credential.foundBy.name}</small><br />
            <small>Aho cyabonetse: {credential.foundLocation}</small><br />
            <small>Itariki cyabonetseho: {credential.foundDate}</small>
          </div>
        </div>
      ))}

      <div id="noResults" >
        <img
          src="/images/not-found.png"
          alt="Nta byangombwa byabonetse"
        />
        <p >
          Nta cyangombwa gihuye n'ibishakishwa cyabonetse.
        </p>
      </div>

      <footer className="bottom-nav">
        <a href="home" >Ahabanza</a>
        <a href="lost" >Cyabuze</a>
        <a href="found" className="active" >Cyabonetse</a>
        <a href="notifications" >Amakuru</a>
      </footer>
    </div>
  );
};

export default FoundPage;