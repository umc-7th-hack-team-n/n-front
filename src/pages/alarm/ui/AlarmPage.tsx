import { useNavigate } from "react-router";
import { HeaderAction } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import AppBar from "@shared/ui/AppBar";
import styled from "styled-components";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";

const AlarmPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };

    return (
        <>
        <AppBar leftHeaderAction={leftHeaderAction} title="명상 타이머" />
        <Container>
            <TimerBox>
                <CountdownCircleTimer
                isPlaying={true}
                duration={900}
                colors={['#003459', '#005070', '#001F38']}
                colorsTime={[300,600,900]}
                size={270}
                isGrowing={true}
                >
                    {({ remainingTime }) => {
                        const minutes = Math.floor(remainingTime/60);
                        const seconds = remainingTime%60;
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
                <TimerBtn>재설정</TimerBtn>
                <TimerBtn>일시정지</TimerBtn>
            </BtnBox>
            <DescriptDiv>

            </DescriptDiv>
            <Button onClick={()=>navigate(-1)}>완료</Button>
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

const CircleTimer = styled.div`
    background-color: white;
    // width: 50%;
    min-height: 270px;
    height: 88.601%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
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

const DescriptDiv = styled.div`
    width: 100%;
    height: 57.8%;
    background-color: white;
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
`;