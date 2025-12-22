import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Component1 from "./components/Component1";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Props Drilling Example</h2>
      <Component1 />
    </div>
  );
}

export default App;

