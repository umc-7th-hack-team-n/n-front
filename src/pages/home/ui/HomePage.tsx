import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import IcCalendar from "@shared/assets/icon/ic-calendar.svg";
import styled from "styled-components";
import ImgRules from "@shared/assets/image/img-home-rules.png"

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => undefined };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: IcCalendar, onClick: () => undefined },
  ];

  return (
    <Container>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <ContetnsDiv>
        <ContentImg src={ImgRules} width={'100%'} />
        <Text right={'20px'} bottom={'15px'}>우리가 지킬 10가지</Text>
      </ContetnsDiv>
      <SmallContainer>
        <SmallContetnsDiv>
          <Text bottom={'75px'}>판결</Text>
          <SmallText>
            서로 이해가 어려울 땐,<br/>
            제3자의 시선에서 답을 찾아보세요.
          </SmallText>
        </SmallContetnsDiv>
        <SmallContetnsDiv>
          <Text bottom={'75px'}>화해</Text>
          <SmallText>
            고요함 속에서 서로를 이해해 보세요.
          </SmallText>
        </SmallContetnsDiv>
      </SmallContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`

const ContetnsDiv = styled.div`
  width: 72.046%;
  flex-shrink: 0;
  border-radius: 20px;
  margin-top: 27px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
`

const ContentImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
`
interface TextStyle {
  right?: string;
  bottom?: string;
}
const Text = styled.div<TextStyle>`
  position: absolute;
  ${props => props.right ?
    `right: ${props.right};`
    :
    `right: 50%;
    transform: translate(50%, 50%);`
  }
  // right: ${props => props.right || '50%'};
  bottom: ${props => props.bottom};
  text-align: center;
  color: #121212;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 1px;
`

const SmallText = styled.div`
  font-family: Pretendard;
  font-size: 9px;
  position: absolute;
  text-align: center;
  left: 2px;
  bottom: 35px;
`

const SmallContainer = styled.div`
  // width: 100vw;
  width: 100%;
  height: 100vh;
  // overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 21px;
  padding-bottom: 30px;
`

const SmallContetnsDiv = styled.div`
  background-color: yellow;
  width: 33.637%;;
  height: 69.34%;
  padding: 230px 17px 15px 17px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  position: relative;
  // aspect-ratio: 1.73 / 1
`