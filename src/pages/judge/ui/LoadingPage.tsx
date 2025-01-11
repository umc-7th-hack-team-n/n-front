import styled, { keyframes } from "styled-components";
import leftHand from "@shared/assets/icon/ic-hand-left.svg";
import rightHand from "@shared/assets/icon/ic-hand-right.svg";

const LoadingPage = () => {
  const text = "판결중입니다";

  return (
    <Container>
      <Hands>
        <LeftHand src={leftHand} />
        <RightHand src={rightHand} />
      </Hands>
      <Text>{text.split("").map((char, index) => (
        <Letter key={index} index={index}>
          {char}
        </Letter>
      ))}</Text>
    </Container>
  );
};

export default LoadingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom, #005999 0%, #0B0B0B 66%) no-repeat center;
`;

// 애니메이션 정의
const moveLeftHand = keyframes`
  0%, 100% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(0);
  }
`;

const moveRightHand = keyframes`
  0%, 100% {
    transform: translateX(50px);
  }
  50% {
    transform: translateX(0);
  }
`;

const Hands = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftHand = styled.img`
  object-fit: cover;
  animation: ${moveLeftHand} 1s infinite;
`;

const RightHand = styled.img`
  object-fit: cover;
  animation: ${moveRightHand} 1s infinite;
`;

const wave = keyframes`
  0%, 100% {
    transform: translateY(0); /* 원래 위치 */
  }
  50% {
    transform: translateY(-10px); /* 위로 살짝 이동 */
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;


const Letter = styled.span<{ index: number }>`
  font-size: 24px;
  font-weight: 600;
  color: white;
  display: inline-block;
  animation: ${wave} 1s infinite;
  animation-delay: ${({ index }) => index * 0.1}s;
`;
