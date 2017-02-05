import React from 'react';
import Charity from './charity/Charity.js';
import Donations from './donations/Donations.js';

const App = () => {
  return (
    <div>
      <h1>Fundraising!</h1>
      <Charity />
      <Donations />
    </div>
  );
};

export default App;
