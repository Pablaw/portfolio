import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

// import mac_catalina from "/img/mac_catalina.jpg";

const IntroContents = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const showInputHandler = (): void => {
    setShowInput(true);
  };
  return (
    <Container>
      <Header></Header>
      <ContentsDiv>
        <UserImage />
        <UserName>Pablaw</UserName>
        {showInput ? (
          <PasswordInput placeholder="&nbsp;&nbsp;암호입력" />
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
  gap: 10px;
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
const PasswordInput = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 15px;
  background-color: gray;
  border: 0;
  caret-color: #ffffff;
  &:focus-visible {
    outline: 0;
  }
  &::placeholder {
    color: #ffffff;
  }
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
