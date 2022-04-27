import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from "./components/Login"
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path="/home" element={<RequireAuth component={Home} />} /> */}
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function RequireAuth({ component: C, ...props }) {
  let auth = useSelector(state => state.user.name);
  console.log(auth ? "yes auth" : "no auth")
  let location = useLocation();
  console.log(location)

  return auth ? (
    <C {...props} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default App;
