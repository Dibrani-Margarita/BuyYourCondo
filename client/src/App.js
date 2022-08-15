import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CondoList from './components/CondoList';
import NewCondo from './components/NewCondo';
import Condo from './components/Condo';
import Home from './components/Home';
import EditCondo from './components/EditCondo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/condos" element={<CondoList />} />
        <Route path="/new" element={<NewCondo />} />
        <Route path="/condo/:id" element={<Condo />} />
        <Route path="/condo/edit/:id" element={<EditCondo />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;