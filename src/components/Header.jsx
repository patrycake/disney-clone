import React from "react";
import style from "styled-components";
import { logout } from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import homeImg from "../images/home-icon.svg";
import searchImg from "../images/search-icon.svg";
import watchlistImg from "../images/watchlist-icon.svg";
import originalsImg from "../images/original-icon.svg";
import moviesImg from "../images/movie-icon.svg";
import seriesImg from "../images/series-icon.svg";

function Header() {
  const userPhoto = useSelector((state) => state.user.photo);

  return (
    <Nav>
      <Logo to="/">
        <img src={logo} alt="" />
      </Logo>
      <NavMenu>
        <NavItem location="/home" src={homeImg} text="HOME" />
        <NavItem location="/search" src={searchImg} text="SEARCH" />
        <NavItem location="/watchlist" src={watchlistImg} text="WATCHLIST" />
        <NavItem location="/originals" src={originalsImg} text="ORIGINALS" />
        <NavItem location="/movies" src={moviesImg} text="MOVIES" />
        <NavItem location="/series" src={seriesImg} text="SERIES" />
      </NavMenu>
      <p>Profile</p>
      <SignOut>
        <UserImg src={userPhoto} />
        <DropDown>
          <span onClick={logout}>Sign Out</span>
        </DropDown>
      </SignOut>
    </Nav>
  );
}

function NavItem({ location, src, text }) {
  return (
    <Link to={location}>
      <img src={src} alt="HOME" />
      <span>{text}</span>
    </Link>
  );
}

const UserImg = style.img`
height: 100%; `;

const DropDown = style.div`
position: absolute;
top: 48px;
right: 0px;
background-color: rgb(19,19,19);
border: 1px solid rgba(151,151,151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 /50%) 0 0 18px 0;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 120px;
text-align: center;
opacity: 0;
`;

const SignOut = style.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
aling-items: center;
justify-content: center;

${UserImg} {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

&:hover{
  ${DropDown}{
    opacity: 1;
    transition-duration: 1s;
  }
}`;

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

p{
  letter-spacing: 1.42px;
  line-height: 1.08;
  padding-right: 5px;
}
`;

const Logo = style(Link)`
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

export default Header;
