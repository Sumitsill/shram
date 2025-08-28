import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthWrapper from './components/auth/AuthWrapper';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <AuthProvider>
      <AuthWrapper>
        <MainLayout />
      </AuthWrapper>
    </AuthProvider>
  );
}

export default App;