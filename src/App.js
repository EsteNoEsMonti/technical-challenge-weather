import React from 'react';
import PublicLayout from './components/PublicLayout/PublicLayout';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <PublicLayout>
      <Weather/>
    </PublicLayout>
  );
};

export default App;
