import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Filter from './components/Filter/index';
import TrueHeader from './components/TrueHeader/index.';
import './App.css'

function App() {
  // Assuming you have a state/variable named 'isLogged' to track the login status

  return (
    <Router>
      <TrueHeader/>
      <Filter/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  
  );
}

export default App;