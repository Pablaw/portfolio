import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { BiRightArrowAlt } from "react-icons/bi";
// import mac_catalina from "/img/mac_catalina.jpg";

const IntroContents = () => {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const showInputHandler = (): void => {
    setShowInput(true);
  };
  const showPlaceHolderHandler = (): void => {
    setShowPlaceHolder(false);
  };
  const addPasswordInput = (): void => {
    if (inputValue.length < 8) {
      setInputValue(inputValue + "*");
    } else {
      setShowPlaceHolder(true);
      navigate("/123");
    }
  };
  setTimeout(showInputHandler, 1500);
  setTimeout(showPlaceHolderHandler, 3000);
  if (!showPlaceHolder) setInterval(addPasswordInput, 300);
  return (
    <Container>
      <Header></Header>
      <ContentsDiv>
        <UserImage />
        <UserName>Pablaw</UserName>
        {showInput ? (
          <InputDiv>
            {showPlaceHolder ? (
              <PlaceHolderTxt>암호 입력</PlaceHolderTxt>
            ) : null}
            <PasswordInput
              maxLength={8}
              type="password"
              onClick={showPlaceHolderHandler}
              value={inputValue}
            />
            <LogInArrow>
              <BiRightArrowAlt style={{ width: "25px", color: "#d4d4d4" }} />
            </LogInArrow>
          </InputDiv>
        ) : (
          <InputSpace onClick={showInputHandler} />
        )}
        <NoticeTxt>Touch ID 또는 암호 입력</NoticeTxt>
        {/* <CancleButton>
          <div>취소</div>
        </CancleButton> */}
      </ContentsDiv>
    </Container>
  );
};

export default IntroContents;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/img/mac_catalina.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div``;
const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`;
const UserImage = styled.div`
  width: 160px;
  height: 160px;
  background-color: gray;
  border-radius: 50%;
`;
const UserName = styled.div``;
const InputDiv = styled.div`
  position: relative;
  width: 150px;
  height: 30px;
  padding: 0 0 0 10px;
  border-radius: 15px;
  background-color: rgba(152, 152, 152, 0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PlaceHolderTxt = styled.div`
  position: absolute;
  font-size: 15px;
  color: #d3d3d3;
`;
const PasswordInput = styled.input`
  font-size: 32px;
  width: 75%;
  border: 0;
  background-color: transparent;
  caret-color: transparent;
  color: #eeeeee;
  &:focus-visible {
    outline: 0;
  }
`;
const LogInArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.5px;
  height: 20.5px;
  border: 2px solid #d4d4d4;
  border-radius: 50%;
  margin: 0 5px;
`;
const InputSpace = styled.div`
  width: 160px;
  height: 30px;
  border-radius: 15px;
`;
const NoticeTxt = styled.div`
  font-size: 12px;
`;
const CancleButton = styled.div``;
