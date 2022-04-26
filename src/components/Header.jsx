import React from "react";
import style from "styled-components";
import { loginWithGoogle } from "../firebase";
import { setUserLoginState } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import logo from "../images/logo.svg";
import homeImg from "../images/home-icon.svg";
import searchImg from "../images/search-icon.svg";
import watchlistImg from "../images/watchlist-icon.svg";
import originalsImg from "../images/original-icon.svg";
import moviesImg from "../images/movie-icon.svg";
import seriesImg from "../images/series-icon.svg";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  async function loginClick() {
    const user = await loginWithGoogle();
    console.log(user);
    dispatch(
      setUserLoginState({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  return (
    <Nav>
      <Logo href="/">
        <img src={logo} alt="" />
      </Logo>
      {!userName ? (
        <LoginButton onClick={loginClick}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={homeImg} alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src={searchImg} alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src={watchlistImg} alt="HOME" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src={originalsImg} alt="HOME" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src={moviesImg} alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src={seriesImg} alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

const Nav = style.nav`
position: fixed;
top:0;
left:0;
right:0;
height: 70px;
background-color: #090b13;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`;

const Logo = style.a`
padding: 0;
width: 80px;
margin-top:4px;
max-height: 76px;
font-size: 0px;
display:inline-block;
img{
    display:block;
    width:100%;
}
`;

const NavMenu = style.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 22px;

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
        margin-right: 10px;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative;

        &:before{
            background-color:rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            height: 2px;
            left: 0px;
            content: "";
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover{
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }

    @media(max-width:768px){
        display:none
    }
}`;

const LoginButton = style.a`
background-color: rgba(0,0,0,0.5);
padding: 8px 16px;
border: 1px solid #f9f9f9;
border-radius: 4px;
letter-spacing: 1.5px;
line-height: 1.08;
text-transform: uppercase;
transition: all 0.2s ease 0s;

&:hover{
    background-color:#f9f9f9;
    color:rgba(0,0,0,0.5);
}`;

const UserImg = style.img`
height: 100%;
border-radius: 4px;`;

export default Header;
