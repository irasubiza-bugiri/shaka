import React from 'react';

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <html lang="rw">
      <head>
        <meta charSet="UTF-8" />
        <title>Ikosa Ryabaye - ShakishaNaAI</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #60A5FA, #3B82F6);
                height: 100vh;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .error-box {
                background-color: #ffffff;
                padding: 2rem;
                border-radius: 1rem;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                max-width: 28rem;
                width: 100%;
                text-align: center;
                animation: fadeIn 0.8s ease-out;
              }

              .error-box img {
                width: 8rem;
                height: 8rem;
                margin-bottom: 1.5rem;
              }

              .error-box h1 {
                font-size: 1.875rem;
                color: #dc2626;
                margin-bottom: 1rem;
                font-weight: 700;
              }

              .error-box p {
                color: #4B5563;
                font-size: 0.95rem;
                margin-bottom: 1.5rem;
              }

              .error-box a {
                background-color: #2563eb;
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                text-decoration: none;
                font-weight: 600;
                transition: background-color 0.3s ease;
              }

              .error-box a:hover {
                background-color: #1d4ed8;
              }

              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="error-box">
          <img src="/images/not-found.png" alt="Ikosa" />
          <h1>Oops! Ikosa ryabaye</h1>
          <p>
            {errorMessage ||
              'Paji mwashatse ishobora kuba itabaho cyangwa mwagerageje kugera ku paji mutemerewe.'}
          </p>
          <a href="/">Subira ku rubuga nyamukuru</a>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;