import React, { useEffect } from 'react';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log('Google login');
  };

  const handleGithubLogin = () => {
    // Implement GitHub login logic
    console.log('GitHub login');
  };

  return (
    <div className="auth-container">
      <div className="form-overlay" onClick={onClose}></div>
      <div className="form">
        <h2 className="form-title">Welcome</h2>
        <p className="form-subtitle">Choose your login method</p>
        
        <div className="social-auth">
          <button type="button" onClick={handleGoogleLogin} className="auth-button google">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          <button type="button" onClick={handleGithubLogin} className="auth-button github">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.01.65-3.64-1.45-3.64-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.65 2.52 1.17 3.13.89.1-.7.38-1.17.69-1.44-2.42-.28-4.96-1.21-4.96-5.38 0-1.19.42-2.16 1.11-2.92-.11-.27-.48-1.36.11-2.84 0 0 .9-.29 2.96 1.1.86-.24 1.78-.36 2.69-.36.92 0 1.84.12 2.69.36 2.06-1.39 2.96-1.1 2.96-1.1.59 1.48.22 2.57.11 2.84.69.76 1.11 1.73 1.11 2.92 0 4.18-2.54 5.1-4.96 5.37.39.34.73 1 .73 2.02v3c0 .29.18.63.74.53A11 11 0 0012 1.27" fill="#161614"/>
            </svg>
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
