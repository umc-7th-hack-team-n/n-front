import { useNavigate } from "react-router";
import { HeaderAction } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import AppBar from "@shared/ui/AppBar";
import styled from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const AlarmPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
    const [key, setKey] = useState(0);
    const [pause, setPause] = useState(false);
    const [complete, setComplete] = useState(false);
    return (
        <>
        <AppBar leftHeaderAction={leftHeaderAction} title="명상 타이머" />
        <Container>
            <TimerBox>
                <CountdownCircleTimer
                key={key}
                isPlaying={!pause}
                duration={900}
                colors={['#003459', '#005070', '#001F38']}
                colorsTime={[900, 600, 300]}
                size={270}
                isGrowing={true}
                >
                    {({ remainingTime }) => {
                        const minutes = Math.floor(remainingTime/60);
                        const seconds = remainingTime%60;
                        if (remainingTime===0) {
                            setComplete(true);
                            setPause(true);
                        }
                        return (
                            <Time>
                                {String(minutes).padStart(2,"0")}
                                :
                                {String(seconds).padStart(2,"0")}
                            </Time>
                        );
                    }}
                </CountdownCircleTimer>
            </TimerBox>
            <BtnBox>
                <TimerBtn onClick={()=>{
                    setKey(prev => prev+1);
                    setComplete(false);
                    setPause(false);
                    }}>재설정</TimerBtn>
                <TimerBtn onClick={()=>setPause(prev => !prev)}>
                    {pause ?
                    '계속'
                    :
                    '일시정지'
                    }
                </TimerBtn>
            </BtnBox>
            <DescriptBox>
                <DescriptDiv>
                    <DescriptTimeDiv>첫 5분</DescriptTimeDiv>
                    <DescriptionDiv>눈을 맞추고 서로의 호흡에 집중해 보세요.</DescriptionDiv>
                </DescriptDiv>
                <DescriptDiv>
                    <DescriptTimeDiv>두번째 5분</DescriptTimeDiv>
                    <DescriptionDiv>천천히, 깊고 규칙적으로 호흡하며 내면의 고요를 느껴보세요.</DescriptionDiv>
                </DescriptDiv>
                <DescriptDiv>
                    <DescriptTimeDiv>마지막 5분</DescriptTimeDiv>
                    <DescriptionDiv>상대에게 감사하는 한 가지를 말하며 긍정적인 감정을 공유하세요.</DescriptionDiv>
                </DescriptDiv>
            </DescriptBox>
            <Button onClick={()=>navigate(-1)} disabled={!complete}>완료</Button>
        </Container>
        </>
    );
};

export default AlarmPage;

const Container = styled.div`
    padding: 2.747% 5.089%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: auto;
`

const TimerBox = styled.div`
    width: 100%;
    height: 53.94%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: pink;
`

const Time = styled.div`
    font-size: 35px;
    width: 92%;
    height: 92%;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8% 0;
`

const TimerBtn = styled.button`
    width: 34.35%;
    background: #393A3E;
    color: white;
    font-size: 20px;
    font-weight: 400;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 15px;
    border-radius: 30px;
`

const DescriptBox = styled.div`
    width: 100%;
    height: 57.8%;
    // background-color: green;
    margin-bottom: 8%;
    display: flex;
    flex-direction: column;
`

const DescriptDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.75px solid #656565;
    &:last-child {
        border-bottom: 0.75px solid #656565;
    }
`

const DescriptTimeDiv = styled.div`
    color: #FFF;
    // text-align: center;
    font-family: Pretendard;
    // font-size: 15px;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    min-width: 23%;
    // background-color: pink;
`
const DescriptionDiv = styled.div`
    color: #FFF;
    text-align: right;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 150% */
    word-break: keep-all;
`

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
  &:disabled {
    cursor: default;
  }
`;