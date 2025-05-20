import React, { useState,type ChangeEvent } from 'react';

interface Document {
  id: string;
  type: 'lost' | 'found';
  title: string;
  description: string;
  date: string;
  time: string;
  icon: 'id-icon' | 'passport-icon';
  hidden?: boolean;
}

interface HomePageProps {
  documents: Document[];
}

const HomePage: React.FC<HomePageProps> = ({ documents }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);

    const filtered = documents.filter((doc) =>
      [doc.title, doc.description, doc.date, doc.time].some((field) =>
        field.toLowerCase().includes(query)
      )
    );

    setFilteredDocuments(filtered);
  };

  return (
    <html>
      <head>
        <title>Find with AI - Home</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .document-card {
                display: flex;
                gap: 10px;
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 6px;
              }

              .hidden-doc {
                display: none;
              }

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
                display: inline-block;
                animation: fadeInDown 0.8s ease-in-out;
              }

              .top-header .highlight {
                color: #FFD700;
                font-weight: bold;
              }

              @keyframes fadeInDown {
                from {
                  opacity: 0;
                  transform: translateY(-15px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .category {
                padding: 8px 16px;
                margin: 5px;
                border: none;
                border-radius: 20px;
                background-color: #eee;
                cursor: pointer;
              }

              .category.active {
                background-color: #444;
                color: white;
              }

              .search-box input {
                width: 100%;
                padding: 10px;
                font-size: 16px;
              }

              .see-all {
                cursor: pointer;
                color: blue;
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
            <span className="highlight">Find</span> with AI
          </h1>
        </header>

        <br />
        <div className="search-box">
          <input
            type="text"
            placeholder="Shakisha inyandiko iyo ari yo yose..."
            id="searchInput"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <div className="categories-section">
          <br />
          {/* <div className="categories">
            <button className="category active" onClick={() => filterDocs('all')}>
              Zose
            </button>
            <button className="category" onClick={() => filterDocs('lost')}>
              Izabuze
            </button>
            <button className="category" onClick={() => filterDocs('found')}>
              Izabonetse
            </button>
          </div> */}
        </div>

        <div className="recent-section">
          <br />
          {/* <h2>Ibya vuba <span className="see-all" id="seeAllBtn">Reba Zose</span></h2> */}
          {filteredDocuments.map((doc) => (
            <div
              className={`document-card ${doc.type} ${doc.hidden ? 'hidden-doc' : ''}`}
              key={doc.id}
            >
              <div className={`icon ${doc.icon}`}></div>
              <div className="text">
                <strong>{doc.title}</strong>
                <p>{doc.description}</p>
                <small>
                  {doc.time} • {doc.date}
                </small>
              </div>
            </div>
          ))}

          <div
            id="noResults"
            style={{ display: filteredDocuments.length === 0 ? 'block' : 'none' }}
          >
            <img
              src="/images/not-found.png"
              alt="Nta byabonetse"
              style={{ width: '150px', opacity: 0.5 }}
            />
            <p style={{ fontSize: '18px', color: 'gray', marginTop: '10px' }}>
              Nta nyandiko ihuye n’iyo ushaka yabonetse.
            </p>
          </div>
        </div>

        <footer className="bottom-nav">
          <a href="home" className="active">
            Ahabanza
          </a>
          <a href="lost">Izabuze</a>
          <a href="all">Zose</a>
          <a href="found">Izabonetse</a>
          <a href="notifications">Amakuru</a>
        </footer>
      </body>
    </html>
  );
};

export default HomePage;