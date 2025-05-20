import { useState, useEffect } from 'react';
import '../styles/welcome.css'

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target) {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleScroll));

    // Lazy load images
    const images = document.querySelectorAll('img');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    }, options);

    images.forEach(img => observer.observe(img));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div>
      <header style={{
        background: 'linear-gradient(135deg, #004aad, #2b6cb0)',
        color: 'white',
        padding: '1.5rem 2rem',
        position: 'fixed',
        width: '100%',
        top: 0,
        left:0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}>
        <div className="header-container" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div className="menu-icon" onClick={toggleSidebar} style={{
            display: 'none',
            fontSize: '1.8rem',
            cursor: 'pointer',
          }}>
            <i className="fas fa-bars"></i>
          </div>
          <div className="logo" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
            Find with AI Rwanda
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            {['Ahabanza', 'Ibyacu', 'Serivisi', 'Abatubwira', 'Ibibazo', 'Tuvugishe'].map((item, index) => (
              <a key={index} href={`#${item.toLowerCase()}`} style={{
                color: 'white',
                fontWeight: 500,
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                transition: 'background 0.3s, color 0.3s',
              }}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'white', color: '#004aad' })}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'transparent', color: 'white' })}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className={`sidebar ${sidebarOpen ? 'show' : ''}`} id="sidebar" style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? 0 : '-250px',
          width: '250px',
          height: '100%',
          background: '#004aad',
          padding: '2rem',
          transition: 'left 0.3s ease',
          zIndex: 999,
        }}>
          {['Ahabanza', 'Ibyacu', 'Serivisi', 'Abatubwira', 'Ibibazo', 'Tuvugishe'].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} onClick={toggleSidebar} style={{
              color: 'white',
              display: 'block',
              padding: '1rem 0',
              fontWeight: 500,
            }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#a0c4ff')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
            >
              {item}
            </a>
          ))}
        </div>
      </header>

      <section id="home" style={{
        background: "url('/images/rwanda-hero.png') center/cover no-repeat",
        color: 'white',
        textAlign: 'center',
        padding: '12rem 2rem',
        marginTop: '80px',
        borderRadius: 0,       
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}></div>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
          Shakisha Ibintu Byawe n'Ikoranabuhanga
        </h2>
        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          Turabafasha kubona ibyangombwa byatakaye mu buryo bwihuse hifashishijwe ikoranabuhanga rya AI.
          Sisitemu yacu igezweho ikorana n’inzego z’ubuyobozi mu Rwanda kugirango ibisubizo by’ibyangombwa
          byawe bigushyikire vuba kandi mu buryo bworoshye.
        </p>
      </section>

      <section id="about" style={{
        maxWidth: '1400px',
        margin: '100px auto 40px',
        padding: '3rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        animation: 'fadeIn 1s ease both',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          color: '#004aad',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Ibyacu
          <span style={{
            content: '',
            width: '60px',
            height: '4px',
            background: '#004aad',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
          }}></span>
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Find with AI Rwanda ni urubuga rwashinzwe n’abanyarwanda bafite intego yo guhuza abantu
          bataye ibyangombwa n'ababibonye mu buryo bwihuse kandi bwisanzuye. Dufite ubunararibonye mu
          ikoreshereze ry’ikoranabuhanga mu gukemura ibibazo by’abaturarwanda, cyane cyane mu bice
          by’icyaro.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Twiyemeje guteza imbere uburyo bwo gushaka no gusubiza ibyangombwa byoroshye, buzamara
          kandi bugera kuri buri wese. Ubushakashatsi bwacu bukoresha AI kugirango bumenye neza ibyangombwa
          byabonetse no kubyerekana ababifite.
        </p>
        <div className="gallery" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {[
            { src: '/images/id.png', alt: 'Indangamuntu y’u Rwanda' },
            { src: '/images/mutuelle.png', alt: 'Ikirango cya Mutuelle de Santé' },
            { src: '/images/passport.png', alt: 'Paspore y’u Rwanda' },
          ].map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} style={{
              width: '100%',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              transition: 'transform 0.3s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>
      </section>

      <section id="services" style={{
        maxWidth: '1400px',
        margin: '100px auto 40px',
        padding: '3rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        animation: 'fadeIn 1s ease both',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          color: '#004aad',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Serivisi Zacu
          <span style={{
            content: '',
            width: '60px',
            height: '4px',
            background: '#004aad',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
          }}></span>
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Dutanga serivisi z’ikoranabuhanga zihamye kugirango tubafashe mu kubona ibyangombwa byawe
          byatakaye cyangwa kumenyekanisha ibyabonetse.
        </p>
        <ul style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          {[
            'Gutangaza ibyangombwa byatakaye cyangwa byabonetse binyuze kuri sisitemu yacu.',
            'Koresha ikoranabuhanga rya AI mu gushaka aho ikintu cyawe cyabonetse mu buryo bwihuse.',
            'Gucunga no gukosora amakosa mbere yo guhuza ibyangombwa n\'ababifite.',
            'Kwemeza ubusugire bw\'amafoto n\'amakuru yoherejwe kuri sisitemu yacu.',
            'Kugenzura no kumenyesha ibyangombwa byabonetse mu buryo bwa digital.',
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: '0.8rem', position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ color: '#004aad', position: 'absolute', left: 0 }}>✔</span>
              {item}
            </li>
          ))}
        </ul>
        <p>
          <a href="/welcome" style={{ color: '#004aad', fontWeight: 500, textDecoration: 'underline' }}>
            Tangira gushaka cyangwa gutangaza ibyangombwa byawe hano
          </a>
        </p>
      </section>

      <section id="testimonials" style={{
        maxWidth: '1400px',
        margin: '100px auto 40px',
        padding: '3rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        animation: 'fadeIn 1s ease both',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          color: '#004aad',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Abatubwira
          <span style={{
            content: '',
            width: '60px',
            height: '4px',
            background: '#004aad',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
          }}></span>
        </h2>
        <div className="testimonials" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
        }}>
          {[
            { text: 'Nari ntaye indangamuntu yanjye, ariko sisitemu ya Find with AI yanyereje aho yabonetse mu minsi itatu gusa!', name: 'Hatuma Charles' },
            { text: 'Porogaramu yabo yoroshye kandi yansubije pasiporo yanjye vuba. Ndabashimiye cyane!', name: 'Igabe Murangwa Brilllante' },
            { text: 'Ubunararibonye bwabo mu gukoresha AI bwanyereje uburyo bworoshye bwo kubona ibyangombwa byanjye.', name: 'Nibishaka Raphael' },
            { text: 'Find with AI yampaye icyizere! Naritaye permis ariko bayinsubije bidatinze.', name: 'Gisa Fred' },
            { text: 'Nari maze kwihagararaho ariko iyi sisitemu yankuye mu gihirahiro mu masaha 48 gusa!', name: 'Ntare Kayitare Prince' },
            { text: 'Sinigeze ntekereza ko kubona icyangombwa cyanjye byashoboka ariko Find with AI yampinduriye ubuzima.', name: 'Tush ti' },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{
              background: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center',
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{testimonial.text}</p>
              <h4 style={{ color: '#004aad', fontWeight: 600 }}>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" style={{
        maxWidth: '1400px',
        margin: '100px auto 40px',
        padding: '3rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        animation: 'fadeIn 1s ease both',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          color: '#004aad',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Ibibazo Bikunze Kwibazwa
          <span style={{
            content: '',
            width: '60px',
            height: '4px',
            background: '#004aad',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
          }}></span>
        </h2>
        {[
          {
            question: 'Ni gute nshobora gutangaza ibyangombwa byanjye byatakaye?',
            answer: 'Ushobora kohereza amakuru y’ibyangombwa byawe binyuze kuri sisitemu yacu ya WhatsApp cyangwa urubuga rwacu. Sisitemu yacu izakora ibyo yashoboye kugirango ibyereke aho byabonetse.',
          },
          {
            question: 'Ni serivisi ki ziboneka kuri porogaramu yanyu?',
            answer: 'Porogaramu yacu iri gukorerwa kugirango ikorane na WhatsApp, Play Store, na App Store, kandi izatanga uburyo bworoshye bwo gutangaza no kubona ibyangombwa byawe.',
          },
          {
            question: 'Ibyangombwa byanjye byabonetse, ni gute nabimenyesha?',
            answer: 'Kohereza amakuru y’ibyangombwa byabonetse kuri sisitemu yacu, tuzabafasha kubona nyirabyo mu buryo bwihuse kandi bwizewe.',
          },
        ].map((faq, index) => (
          <div key={index} className="faq-item" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#004aad', marginBottom: '0.5rem' }}>{faq.question}</h3>
            <p style={{ fontSize: '1.1rem' }}>{faq.answer}</p>
          </div>
        ))}
      </section>

      <section id="contact" style={{
        maxWidth: '1400px',
        margin: '100px auto 40px',
        padding: '3rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        animation: 'fadeIn 1s ease both',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          color: '#004aad',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Tuvugishe
          <span style={{
            content: '',
            width: '60px',
            height: '4px',
            background: '#004aad',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
          }}></span>
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Tubarizwa muri Rwanda Coding Academy, Nyabihu District, Province y’Uburengerazuba.
          Twakwishimira kugera kuri wowe kandi tuzakomeza gukora uko dushoboye kugirango dukomeze
          gutanga serivisi ze.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Telefone:</strong> +250 798963223<br />
          <strong>Email:</strong> <a href="mailto:irasubizasalynelson@gmail.com" style={{ color: '#004aad' }}>
            irasubizasalynelson@gmail.com
          </a><br />
          <a href="https://maps.app.goo.gl/Nf3DNjGnhCgREL4S7" target="_blank" style={{ color: '#004aad' }}>
            Reba aho turi kuri Google Maps
          </a>
        </p>
      </section>

      <footer style={{
        background: '#004aad',
        color: 'white',
        width:'100%',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '3rem',
      }}>
        © 2025 Find with AI Rwanda. Made with .
        <a href="/admin/home" style={{ color: '#a0c4ff', fontWeight: 500 }}>Nelson</a>
      </footer>


    </div>
  );
}