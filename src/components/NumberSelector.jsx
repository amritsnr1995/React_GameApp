/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
  const array = [1, 2, 3, 4, 5, 6];

  // console.log(selectedNumber);
const setErrorHandler = (value)=> {
  setSelectedNumber(value)
  setError("")
}

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((value, index) => (
          <Box
            key={index}
            onClick={() => setErrorHandler(value)}
            isSelected={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color:red;
  }
`;

const Box = styled.div`
  height: 72px;
  cursor: pointer;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
