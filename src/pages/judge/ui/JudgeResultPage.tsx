import AppBar from "@shared/ui/AppBar.tsx";
import IcLeftArrow from "@icon/ic-left-arrow.svg";
import { HeaderAction } from "@shared/types";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Slider from "@pages/judge/components/Slider.tsx";
import logo from '@icon/ic-logo.svg';

const example = "남자친구는 반복적으로 술을 마시고 연락을 끊으며 \n" +
  "외박하는 행동을 하여 여자친구에게 신뢰를 잃게 \n" +
  "만들었습니다. \n" +
  "연락이 안 되는 이유가 술 때문이라 할지라도, \n" +
  "반복적인 행동은 문제를 키웁니다. \n" +
  "여자친구는 감정적으로 반응하고 연락을 회피한 \n" +
  "이유는 남자친구의 신뢰를 잃었기 때문이므로, \n" +
  "감정적으로 이해할 수 있습니다. \n" +
  "그러나 두 사람 모두 의사소통과 신뢰 회복이\n" +
  "필요합니다.";

const JudgeResultPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const finish = () => {
    navigate('/home');
  };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="판결" />
      <Container>
        <ResultContainer>
          <img src={logo} alt='logo'/>
          <BoldText>판결</BoldText>
          <Judgement>{example}</Judgement>
        </ResultContainer>
        <Section>
          <Slider />
          <Button onClick={finish}>완료</Button>
        </Section>
      </Container>

    </>
  );
};

export default JudgeResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 35px;
  padding: 0 20px;
  overflow-y: auto;
`;

const ResultContainer = styled.div`
  display: flex;
  height: 45vh;
  min-height: 400px;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 20px;
  gap: 15px;
  background-color: #F5F5F5;
  padding: 20px;
  overflow-y: auto;
`;

const BoldText = styled.p`
  width: 75px;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  color: black;
  text-align: center;
  margin-left: 20px;
  letter-spacing: 20px;
`;

const Judgement = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  color: black;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 31px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #646772;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 30px;
`;
