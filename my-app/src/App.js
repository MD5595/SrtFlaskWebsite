import React from 'react';

function App() {
  const homePageContent = `
    <h1>Welcome to My Home Page</h1>
   
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: homePageContent }} />
  );
}

export default App;

