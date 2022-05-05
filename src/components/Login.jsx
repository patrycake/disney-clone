import React from "react";
import styled from "styled-components";
import disney from "../images/logo.svg";
import google from "../images/google-brands.svg";
import facebook from "../images/facebook-f-brands.svg";
import twitter from "../images/twitter-brands.svg";

import { setUserLoginState } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      setUser(res.user);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  async function setUser(user) {
    dispatch(
      setUserLoginState({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  return (
    <Container>
      <Link to="/">
        <img src={disney} alt="" />
      </Link>
      <LoginInput>
        <h2>Log in with your email</h2>
        <input type="email" name="" id="" placeholder="Email" />
        <input type="password" name="" id="" placeholder="Password" />
        <small>(case sensitive)</small>

        <button>Sign In</button>
        <small>
          <a href="">Forgot your password?</a>
        </small>

        <div>
          <img src={google} alt="" onClick={loginWithGoogle} />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </LoginInput>
    </Container>
  );
}

export default Login;

const Container = styled.main`
  position: relative;
  // min-height: calc(100vh - 70px);
  // overflow-x: hidden;
  display: block;
  // padding: 0 calc(3.5vw + 5px);
  padding: 50px;
  // top: 70px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  &:after {
    background-color: #1a1d29;
    content: "";
    inset: 0px;
    opacity: 1;
    position: absolute;
    z-index: -1;
  }

  img {
    width: 150px;
  }

  button {
    background-color: #1072d2;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 15px 150px;
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    text-transform: uppercase;
    margin-top: 10px;

    &:hover {
      background-color: #1ca0fc;
    }
  }
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    padding: 15px;
    // border: 2px solid rgba(249, 249, 249, 0.5);
    border-radius: 4px;
    display: flex;
    justify-content: space-around;

    img {
      width: 40px;
      height: 40px;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  input[type="email"],
  input[type="password"] {
    padding: 15px;
    background-color: #32343e;
    border-radius: 4px;
    border: none;
    color: white;

    &:focus {
      outline: none;
      border: 1px solid rgba(249, 249, 249, 0.5);
      // transition: border 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  a {
    color: #1072d2;
    &:hover {
      color: #1ca0fc;
    }
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  letter-spacing: 1.5px;
  line-height: 1.08;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.5);
  }
`;
