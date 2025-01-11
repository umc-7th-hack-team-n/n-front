import styled, { keyframes } from "styled-components";
import React from "react";

interface SliderProps {
  score: number;
}

const Slider: React.FC<SliderProps> = ({ score }) => {

  return (
    <Container>
      <LabelContainer>
        <Label>남자</Label>
        <Label>여자</Label>
      </LabelContainer>
      <SliderWrapper>
        <Track $initialValue={score} />
        <Thumb $initialValue={score} />
      </SliderWrapper>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 500;
  line-height: 22px;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 12px;
`;

interface InitialValue {
  $initialValue: number;
}

const Track = styled.div<InitialValue>`
  position: absolute;
  width: 100%;
  height: 27px;
  border: 1px solid white;
  border-radius: 30px;
  background: linear-gradient(to right, #005999 0%, #0b0b0b ${({ $initialValue }) => $initialValue}%, #993366 100%);
  z-index: 1;
`;

const moveThumb = (finalValue: number) => keyframes`
  0% {
    left: 0;
  }
  25% {
    left: 100%;
  }
  50% {
    left: 25%;
  }
  75% {
    left: 75%;
  }
  100% {
    left: ${finalValue}%;
  }
`;

const Thumb = styled.div<InitialValue>`
  position: absolute;
  z-index: 2;
  top: 13px;
  left: 0;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${({ $initialValue }) => moveThumb($initialValue)} 0.5s ease-in-out forwards;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
