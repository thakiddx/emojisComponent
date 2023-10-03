import { useState } from 'react'
import React from 'react'
import Emojis from './components/Emojis'
import ComplimentButton from './components/ComplimentButton'
import './App.css'

function App() {
  return (
    <div>
      <Emojis />
      <ComplimentButton />
    </div>
  );
};

export default App;
