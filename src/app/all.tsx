import React, { useState } from 'react';
import '../styles/home.css';

interface Document {
  id: number;
  type: string;
  icon: string;
  title: string;
  description: string;
  time: string;
  visible: boolean;
}

const documents: Document[] = [
  { id: 1, type: 'lost', icon: 'id-icon', title: 'Indangamuntu Yabuze', description: 'Indangamuntu y’ubururu yabuze hafi y’isoko rya Kimironko...', time: '12:45 PM • Kanama 12, 2023', visible: true },
  { id: 2, type: 'found', icon: 'passport-icon', title: 'Icyangombwa cyo kugenda cyabonetse', description: 'Icyangombwa cyafatiwe ku kibuga cy’indege i Kigali, irembo A3...', time: '3:30 PM • Kanama 10, 2023', visible: true },
  { id: 3, type: 'lost', icon: 'id-icon', title: 'Perimi Yabuze', description: 'Perimi ya Eric yabuze hafi ya Kicukiro...', time: '10:15 AM • Kanama 9, 2023', visible: true },
  { id: 4, type: 'found', icon: 'passport-icon', title: 'Ikarita y’ishuri Yabonetse', description: 'Ikarita ya UNILAK yabonetse mu modoka iva Nyabugogo...', time: '5:00 PM • Kanama 8, 2023', visible: true },
  { id: 5, type: 'lost', icon: 'id-icon', title: 'Uruhushya rw’akazi Rwabuze', description: 'Rwapfushijwe hafi y’ibiro bikuru i Remera...', time: '2:20 PM • Kanama 7, 2023', visible: true },
  { id: 6, type: 'found', icon: 'passport-icon', title: 'Pasiporo y’abanyamahanga Yabonetse', description: 'Pasiporo y’Ubufaransa yatoraguwe mu modoka...', time: '8:40 AM • Kanama 6, 2023', visible: false },
  { id: 7, type: 'lost', icon: 'id-icon', title: 'Ikarita ya ATM Yabuze', description: 'Ikarita ya BPR yabuze mu nyubako ya CHIC, Kigali...', time: '4:25 PM • Kanama 5, 2023', visible: false },
  { id: 8, type: 'found', icon: 'passport-icon', title: 'Ikarita y’ibinyabiziga Yabonetse', description: 'Ikigaragaza ibinyabiziga cyabonetse i Gikondo...', time: '9:00 AM • Kanama 4, 2023', visible: false },
  { id: 9, type: 'lost', icon: 'id-icon', title: 'Ikarita y’Ubwishingizi Yabuze', description: 'Ikarita ya mutuelle yabuze nyuma yo kujya kwa muganga...', time: '6:45 PM • Kanama 3, 2023', visible: false },
  { id: 10, type: 'found', icon: 'passport-icon', title: 'Icyemezo cy’amavuko Cyabonetse', description: 'Icyemezo cy’umwana cyabonetse hafi y’i Gisozi...', time: '11:30 AM • Kanama 2, 2023', visible: false },
];

const DocumentCard: React.FC<{ doc: Document }> = ({ doc }) => (
  <div className={`document-card ${doc.type} ${!doc.visible ? 'hidden-doc' : ''}`}>
    <div className={`icon ${doc.icon}`}></div>
    <div className="text">
      <strong>{doc.title}</strong>
      <p>{doc.description}</p>
      <small>{doc.time}</small>
    </div>
  </div>
);

export default function All () {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [filteredDocs, setFilteredDocs] = useState<Document[]>(documents);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    filterDocuments(text, activeCategory);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(category !== 'all');
    filterDocuments(searchText, category);
  };

  const handleSeeAll = () => {
    setShowAll(true);
    setFilteredDocs(documents.map(doc => ({ ...doc, visible: true })));
  };

  const filterDocuments = (search: string, category: string) => {
    let updatedDocs = documents.map(doc => ({
      ...doc,
      visible: (!search || doc.title.toLowerCase().includes(search) || doc.description.toLowerCase().includes(search)) &&
               (category === 'all' || doc.type === category),
    }));
    if (!showAll && category === 'all') {
      updatedDocs = updatedDocs.map((doc, index) => ({
        ...doc,
        visible: index < 5 || doc.visible,
      }));
    }
    setFilteredDocs(updatedDocs);
  };

  const noResults = filteredDocs.every(doc => !doc.visible);

  return (
    <div>
      <header className="top-header">
        <h1><span className="highlight">Find</span> with AI</h1>
      </header>
      <div className="search-box">
        <input
          type="text"
          placeholder="Shakisha inyandiko iyo ari yo yose..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <div className="categories-section">
        <div className="categories">
          <button
            className={`category ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            Zose
          </button>
          <button
            className={`category ${activeCategory === 'lost' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('lost')}
          >
            Izabuze
          </button>
          <button
            className={`category ${activeCategory === 'found' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('found')}
          >
            Izabonetse
          </button>
        </div>
      </div>
      <div className="recent-section">
        <h2>
          Ibya vuba {activeCategory === 'all' && !showAll && (
            <span className="see-all" onClick={handleSeeAll}>Reba Zose</span>
          )}
        </h2>
        {filteredDocs.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
        {noResults && (
          <div id="noResults" style={{ textAlign: 'center', padding: '20px' }}>
            <img src="/images/not-found.png" alt="Nta byabonetse" style={{ width: '150px', opacity: 0.5 }} />
            <p style={{ fontSize: '18px', color: 'gray', marginTop: '10px' }}>
              Nta nyandiko ihuye n’iyo ushaka yabonetse.
            </p>
          </div>
        )}
      </div>
      <footer className="bottom-nav">
        <a href="home" className="active">Ahabanza</a>
        <a href="lost">Izabuze</a>
        <a href="all">Zose</a>
        <a href="found">Izabonetse</a>
        <a href="notifications">Amakuru</a>
      </footer>
    </div>
  );
};

