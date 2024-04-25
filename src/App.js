import React from 'react';
import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/output.css';
import './css/style.css';

function App() {
  return (
    <>
      <Router>
        <div id="layout">
        <div className="app-header">
          <Nav />
        </div>
       <div className="app-container">
          <AppRoutes />
        </div> 
        <div className="app-footer">
          <Footer />
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
