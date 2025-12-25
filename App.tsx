import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout/Layout';
import { EditorProvider } from './context/EditorContext';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <EditorProvider>
        <Layout />
      </EditorProvider>
    </HelmetProvider>
  );
};

export default App;
