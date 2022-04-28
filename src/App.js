import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Bundle from "./components/Bundle"
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login"


function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Bundle />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<RequireAuth component={Home} />} /> */}
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
