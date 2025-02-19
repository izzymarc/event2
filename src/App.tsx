import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import ProfileSettings from './pages/ProfileSettings';
import Auth from './pages/Auth'; // Import Auth page
import { Header } from './components/Header'; // Import Header

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Include Header component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/auth" element={<Auth />} /> {/* Add Auth route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
