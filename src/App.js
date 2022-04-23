import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
