import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The main login page for the application.
 * This page utilizes the MainAppLayout to center the content and provides the background color.
 * It renders the LoginForm component, which contains all the logic and UI for user authentication.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
