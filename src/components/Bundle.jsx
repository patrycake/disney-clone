import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { auth, provider, logout } from "../firebase";
import { setUserLoginState, setSignOutState } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import bgImg from "../images/login-background.jpg";
import ctaOneImg from "../images/cta-logo-one.svg";
import ctaTwoImg from "../images/cta-logo-two.png";

function Bundle() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  let navigate = useNavigate();

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
      console.log("onAuthStateChanged");
      console.log(user);
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  return (
    <Section>
      <Container>
        <button onClick={() => navigate("/login")}>Login</button>
        <Content>
          <CTA>
            <CTALogoOne src={ctaOneImg} />
            <SignUp to="/login">GET THE DISNEY BUNDLE</SignUp>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <CTALogoTwo src={ctaTwoImg} />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  padding: 30px 40px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    text-align: center;
    width: 100px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    margin: auto 0;

    &:hover {
      background-color: white;
      color: rgba(0, 0, 0, 0.5);
      transition: all linear 0.25s;
    }
  }
`;

const Content = styled.div`
  // margin-bottom: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex: 2;
  margin: 0 auto;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${bgImg});
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled(Link)`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 20px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin-bottom: 30px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Bundle;
