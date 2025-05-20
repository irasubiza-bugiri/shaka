import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import WelcomePage from './app/welcome';
import RegisterStep1 from './app/register/registerStep1';
import RegisterStep2 from './app/register/registerStep2';
import RegisterStep3 from './app/register/registerStep3';
import UserProfile from './app/userProfile';
import RegisterComplete from './app/register/registerComplete';
import Dashboard from './app/dashboard';
import FoundDocuments from './app/admin/found';
import LostDocuments from './app/admin/lost';
import Notifications from './app/admin/notification';
import './App.css'
import UnderDevelopment from './app/admin/home';
import LandingPage from './app';



interface FoundCredential {
  documentType: string;
  documentId: string;
  description: string;
  foundBy: { name: string };
  foundLocation: string;
  foundDate: string;
}


const App: React.FC = () => {
  const [registrationData, setRegistrationData] = useState<{
    name: string;
    email: string;
    password: string;
    phone: string;
  }>({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    role: string;
    verified: boolean;
    createdAt: string;
  } | null>({
    name: 'nelson',
    email: 'nelson@wigo.com',
    phone: '+250790000000',
    role: 'admin',
    verified: true,
    createdAt: 'now'
  });


  // Mock lost credentials data
  const lostCredentials = [
    {
      documentType: 'ID',
      documentId: '123456789',
      description: 'National ID card lost near market',
      ownerName: 'John Doe',
      lostLocation: 'Central Market',
      lostDate: '2025-04-15',
    },
    {
      documentType: 'Passport',
      documentId: 'A987654',
      description: 'Blue passport lost at airport',
      ownerName: 'Jane Smith',
      lostLocation: 'Kigali Airport',
      lostDate: '2025-03-20',
    },
  ];

  const foundCredentials: FoundCredential[] = [{
    documentId: '222',
    documentType: 'id',
    description: 'this is test',
    foundBy: { name: 'wigothehacker' },
    foundDate: '18-02-2008',
    foundLocation: 'muhanga'
  }]

  // Mock notifications data
  const matches = [
    {
      lostCredential: {
        documentType: 'ID',
        documentId: '123456789',
        ownerName: 'John Doe',
      },
      verified: true,
      returned: false,
      matchDetails: 'Found near market, matches description',
      contactInfo: '+250788123456',
      formattedDate: '2025-05-01',
    },
    {
      lostCredential: {
        documentType: 'Passport',
        documentId: 'A987654',
        ownerName: 'Jane Smith',
      },
      verified: false,
      returned: false,
      matchDetails: 'Pending verification at airport',
      contactInfo: '+250789654321',
      formattedDate: '2025-04-25',
    },
  ];

  // Wrapper components to handle navigation and props
  const RegisterStep1Wrapper: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = (data: { name: string; email: string; password: string }) => {
      setRegistrationData(prev => ({ ...prev, ...data }));
      navigate('/register/step2');
    };

    return (
      <RegisterStep1
        initialData={{ name: registrationData.name, email: registrationData.email }}
        onSubmit={handleSubmit}
      />
    );
  };

  const RegisterStep2Wrapper: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = async (phone: string) => {
      // Mock OTP send API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        setRegistrationData(prev => ({ ...prev, phone }));
        navigate('/register/step3');
        return true;
      } catch {
        return false;
      }
    };

    return (
      <RegisterStep2
        initialPhone={registrationData.phone}
        onSubmit={handleSubmit}
      />
    );
  };

  const RegisterStep3Wrapper: React.FC = () => {
    const navigate = useNavigate();
    const handleResendOTP = async (phone: string) => {

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
      } catch {
        return false;
      }
    };

    const handleVerifyOTP = async (phone: string, otp: string) => {
      // Mock OTP verification API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        return otp === '1234'; // Mock valid OTP
      } catch {
        return false;
      }
    };

    const handleRegister = async (formData: { name: string; email: string; phone: string; password: string; role: string }) => {
      // Mock registration API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        setUser({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          verified: true,
          createdAt: new Date().toISOString().split('T')[0],
        });
        return true;
      } catch {
        return false;
      }
    };

    const handleComplete = () => {
      navigate('/register/complete');
    };

    return (
      <RegisterStep3
        phone={registrationData.phone}
        initialFormData={{
          name: registrationData.name,
          email: registrationData.email,
          password: registrationData.password,
        }}
        onResendOTP={handleResendOTP}
        onVerifyOTP={handleVerifyOTP}
        onRegister={handleRegister}
        onComplete={handleComplete}
      />
    );
  };

  const UserProfileWrapper: React.FC = () => {
    const navigate = useNavigate();
    if (!user) {
      navigate('/');
      return null;
    }

    const handleLogout = () => {
      setUser(null);
      navigate('/');
    };

    return (
      <UserProfile
        name={user.name}
        email={user.email}
        phone={user.phone}
        role={user.role}
        verified={user.verified}
        createdAt={user.createdAt}
        onLogout={handleLogout}
      />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        {/* <Route path='/login' element={<LoginPage />} /> */}
        <Route path="/register/step1" element={<RegisterStep1Wrapper />} />
        <Route path="/register/step2" element={<RegisterStep2Wrapper />} />
        <Route path="/register/step3" element={<RegisterStep3Wrapper />} />
        <Route path="/register/step2" element={<RegisterStep2Wrapper />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin routes */}
        <Route path='/admin/home' element={<UnderDevelopment/>} />
        <Route path='/admin/found' element={<FoundDocuments foundCredentials={foundCredentials} />} />
        <Route path='/admin/lost' element={<LostDocuments lostCredentials={lostCredentials} />} />
        <Route path='/admin/notifications' element={<Notifications matches={matches} />} />

        {/* user routes */}
        <Route path="/user/profile" element={<UserProfileWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;