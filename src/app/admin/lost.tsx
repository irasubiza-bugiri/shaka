import React, { useState } from 'react';
import '../../styles/admin/lost.css'

interface LostCredential {
  documentType: string;
  documentId: string;
  description: string;
  ownerName: string;
  lostLocation: string;
  lostDate: string;
}

interface LostPageProps {
  lostCredentials: LostCredential[];
}

const LostPage: React.FC<LostPageProps> = ({ lostCredentials = [] }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredCredentials = lostCredentials.filter(credential =>
    `${credential.documentType} ${credential.documentId} ${credential.description} ${credential.ownerName} ${credential.lostLocation} ${credential.lostDate}`
      .toLowerCase()
      .includes(searchText)
  );

  const noResults = filteredCredentials.length === 0 && searchText !== '';

  return (
    <div>
      <header className="top-header">
        <h1>
          <span className="highlight" >Shaka</span> na AI
        </h1>
      </header>

      <div className="search-box" style={{ padding: '15px' }}>
        <input
          type="text"
          placeholder="Shakisha ibyangombwa byabuze..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <h2 >Ibyangombwa byabuze</h2>

      {filteredCredentials.map((credential, index) => (
        <div key={index} className="document-card lost" >
          <div className="icon id-icon" ></div>
          <div className="text" >
            <strong>{credential.documentType} - {credential.documentId}</strong>
            <p >{credential.description}</p>
            <small>Byabuze na: {credential.ownerName}</small><br />
            <small>Aho byabuze: {credential.lostLocation}</small><br />
            <small>Byabuze ku: {credential.lostDate}</small>
          </div>
        </div>
      ))}

      <div id="noResults" >
        <img
          src="/images/not-found.png"
          alt="Nta bisubizo bibonetse"
        />
        <p >
          Nta byangombwa byahuye n'ibyo ushakisha bibonetse.
        </p>
      </div>

      <footer className="bottom-nav">
        <a href="home" >Urugo</a>
        <a href="lost" className="active" >Byabuze</a>
        <a href="found" >Babonetse</a>
        <a href="notifications" >Amatangazo</a>
      </footer>
    </div>
  );
};

export default LostPage;