import AppBar from "@shared/ui/AppBar.tsx";
import IcLeftArrow from "@icon/ic-left-arrow.svg";
import { HeaderAction, JudgeResponse } from "@shared/types";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Slider from "@pages/judge/components/Slider.tsx";
import logo from '@icon/ic-logo.svg';

const JudgeResultPage = () => {
  const { judgeResponse } = useLocation().state as { judgeResponse: JudgeResponse };
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const finish = () => {
    navigate('/home');
  };

  const value = judgeResponse.score.split(':')[0];
  const score = Number(value) * 10;

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="판결" />
      <Container>
        <ResultContainer>
          <img src={logo} alt="logo" />
          <BoldText>판결</BoldText>
          <Judgement>{judgeResponse.c_text}</Judgement>
        </ResultContainer>
        <Section>
          <Slider score={score} />
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
