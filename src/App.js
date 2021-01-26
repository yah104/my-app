import React from 'react';
import profileImage from './img/dai3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App Dog!</h1>
      <h2>Yanling Huang</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
