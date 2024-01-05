import './App.css';
import { Route, Routes } from 'react-router-dom';
import PFHome from './pages/PFHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<PFHome/>} />
        <Route path='/Login' element={<Auth/>} />
        <Route path='/Register' element={<Auth register/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Projects' element={<Projects/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
