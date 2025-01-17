import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction, JudgeRequest } from "@shared/types";
import { useNavigate } from "react-router";
import IcLeftArrow from "@icon/ic-left-arrow.svg";
import Bubble from "@pages/judge/components/Bubble.tsx";
import styled from "styled-components";
import React, { useState } from "react";
import { usePostConflict } from "@pages/judge/feature/usePostConflict.ts";

const JudgeInputPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const [plaintiffStory, setPlaintiffStory] = useState('');
  const [defendantStory, setDefendantStory] = useState('');
  const { mutate } = usePostConflict();

  const changePlaintiffStory = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlaintiffStory(e.target.value);
  }

  const changeDefendantStory = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDefendantStory(e.target.value);
  }

  const handleNext = () => {
    const judgeRequest: JudgeRequest = { couple_id: 1, m_text: plaintiffStory, f_text: defendantStory };
    mutate(judgeRequest);
  }


  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="판결" />
      <Container>
        <InputContainer>
          <Bubble type="plaintiff" value={plaintiffStory} handler={changePlaintiffStory}/>
          <Bubble type="defendant" value={defendantStory} handler={changeDefendantStory} />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleNext}>판결 들으러가기</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default JudgeInputPage;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
`;

const InputContainer = styled.div`
  margin-top: 61px;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 90px;
  gap: 72px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 20px;
  width: 100%;
  max-width: 440px;
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
