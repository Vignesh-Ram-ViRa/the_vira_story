import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Layout
import Layout from './components/organisms/Layout/Layout';

// Pages
import OpeningSequence from './pages/OpeningSequence';
import Home from './pages/Home';
import Career from './pages/Career';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import About from './pages/About';

import './App.css';

/**
 * Main App component
 * Provides Redux store and handles routing for all pages
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
          <Routes>
            {/* Opening sequence without layout */}
            <Route path="/" element={<OpeningSequence />} />
            
            {/* All other pages with shared layout */}
            <Route path="/home" element={<Layout><Home /></Layout>} />
            <Route path="/career" element={<Layout><Career /></Layout>} />
            <Route path="/skills" element={<Layout><Skills /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
          </Routes>
    </div>
      </Router>
    </Provider>
  );
}

export default App;
