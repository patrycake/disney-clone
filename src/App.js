import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Bundle from "./components/Bundle"
import Home from './components/Home';
import Login from "./components/Login"
import MovieDetails from './components/MovieDetails';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUserLoginState, setSignOutState } from "./features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


function App() {
  const [reqAuth, setReqAuth] = useState(false);
  const dispatch = useDispatch();

  async function setUser(user) {
    dispatch(
      setUserLoginState({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user)
        setReqAuth(true)
      }
      else {
        setReqAuth(false)
      }
    });
  }, [])

  function RequireAuth({ component: C, ...props }) {
    let location = useLocation();
    if (reqAuth) return <C {...props} />
    dispatch(setSignOutState());
    return <Navigate to="/" state={{ from: location }} replace />
  }

  function NewUserOnly({ component: C, ...props }) {
    let location = useLocation();
    if (!reqAuth) return <C {...props} />
    return <Navigate to="/home" state={{ from: location }} replace />
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<NewUserOnly component={Bundle} />} />
        <Route path='/home' element={<RequireAuth component={Home} />} />
        <Route path="/login" element={<NewUserOnly component={Login} />} />
        <Route path="/movie" element={<RequireAuth component={MovieDetails} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
