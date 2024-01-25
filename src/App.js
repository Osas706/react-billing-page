import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from './pages/Billing';
import General from './pages/General';
import Invitations from './pages/Invitations';
import Password from './pages/Password';
import Apps from './pages/Apps';
import './index.css';
import Sidebar from './components/Sidebar';

import Subscribe from './components/Subscribe';

const App = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
       <Sidebar />

       <Routes>
         <Route path="/" element={<General />} />
         <Route path="/general" element={<General />} />
          
          <Route path="/password" element={<Password />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/apps" element={<Apps />} />
       </Routes>
      </BrowserRouter>
      
      <Subscribe />
    </div>
  );
}

export default App;
