import React from "react";
import styled from "@emotion/styled";

import PortfolioContents from "../components/portfolioPage/PortfolioContents";

const PortfolioPage = () => {
  return (
    <Container>
      <PortfolioContents />
    </Container>
  );
};

export default PortfolioPage;

const Container = styled.div``;
