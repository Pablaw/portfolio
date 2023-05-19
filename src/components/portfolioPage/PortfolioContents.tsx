import React from "react";
import styled from "@emotion/styled";

import { RiAppleFill } from "react-icons/ri";

const PortfolioContents = () => {
  const menuArray: string[] = [
    "파일",
    "편집",
    "보기",
    "이동",
    "윈도우",
    "도움말",
  ];

  return (
    <Container>
      <Header>
        <MenuDiv>
          <AppleImg>
            <RiAppleFill style={{ color: "#ffffff" }} />
          </AppleImg>
          <CurrentApp>Finder</CurrentApp>
          <MenuText>
            {menuArray.map((menuTitle, idx) => {
              return <EachMenuText key={idx}>{menuTitle}</EachMenuText>;
            })}
          </MenuText>
        </MenuDiv>
      </Header>
    </Container>
  );
};

export default PortfolioContents;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/img/mac_catalina.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;
const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 5px 0;
`;
const AppleImg = styled.div`
  width: 20px;
  height: 20px;
  font-size: 19px;
  padding: 0 8px 0 20px;
`;
const CurrentApp = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding: 0 12px;
`;
const MenuText = styled.div`
  display: flex;
  font-size: 13.5px;
  font-weight: 500;
`;
const EachMenuText = styled.div`
  cursor: default;
  padding: 0 12px;
`;
