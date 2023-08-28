/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
 text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
  }
`;
