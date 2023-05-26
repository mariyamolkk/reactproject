import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home3 from './components/Home3';
import Add3 from './components/Add3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/home3' element={<Home3/>}/>
        <Route path='/add3' element={<Add3/>}/>
      </Routes>
    </div>
  );
}

export default App;
