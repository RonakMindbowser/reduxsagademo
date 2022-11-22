import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} index />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
