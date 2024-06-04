import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Links from './pages/Links';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/link" element={<Links />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
