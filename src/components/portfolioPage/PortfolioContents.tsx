import React from "react";
import styled from "@emotion/styled";

import { RiAppleFill } from "react-icons/ri";
import { MdWifi } from "react-icons/md";
import { FiBluetooth } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoBatteryCharging } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { BsToggles } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";

const PortfolioContents = () => {
  const menuTextGroup: string[] = [
    "파일",
    "편집",
    "보기",
    "이동",
    "윈도우",
    "도움말",
  ];
  const dayTextGroup: string[] = [
    "(일)",
    "(월)",
    "(화)",
    "(수)",
    "(목)",
    "(금)",
    "(토)",
  ];
  const todayMonth: string = String(new Date().getMonth() + 1);
  const todayDate: string = String(new Date().getDate());
  const todayDay: string = dayTextGroup[new Date().getDay()];
  const nowTime: string = new Date().toLocaleTimeString().substring(0, 7);

  return (
    <Container>
      <Header>
        <MenuDiv>
          <AppleImg>
            <RiAppleFill style={{ color: "#ffffff" }} />
          </AppleImg>
          <CurrentApp>Finder</CurrentApp>
          <MenuText>
            {menuTextGroup.map((menuTitle, idx) => {
              return <EachMenuText key={idx}>{menuTitle}</EachMenuText>;
            })}
          </MenuText>
        </MenuDiv>
        <FunctionDiv>
          <TbMessageCircle2Filled />
          <HiSpeakerWave style={{ fontSize: "17px" }} />
          <FiBluetooth style={{ fontSize: "15px" }} />
          <IoBatteryCharging style={{ fontSize: "24px" }} />
          <MdWifi />
          <HiOutlineSearch style={{ fontSize: "17px" }} />
          <BsToggles style={{ fontSize: "16px" }} />
          <TimeDiv>
            {todayMonth}월 {todayDate}일 {todayDay} {nowTime}
          </TimeDiv>
        </FunctionDiv>
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
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
`;
const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 5px 0;
`;
/* ===== 메뉴 구성 ===== */
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
/* ===== 메뉴 구성 ===== */
/* ===== 기능버튼 구성 ===== */
const FunctionDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
  color: #ffffff;
  font-size: 19px;
  & > svg {
    padding: 0 8px;
  }
`;
const TimeDiv = styled.div`
  font-size: 14.2px;
  margin-left: 7px;
`;
/* ===== 기능버튼 구성 ===== */
