import { HeaderAction } from "@shared/types";
import IcCalendar from "@shared/assets/icon/ic-calendar.svg";
import styled from "styled-components";
import ImgRules from "@shared/assets/image/img-home-rules.png";
import { useNavigate } from "react-router";
import HomeAppbar from "@home/components/HomeAppbar.tsx";
import fight from "@icon/ic-fight.svg"
import reconciliation from "@icon/ic-reconciliation.svg"
import SmallBanner from "@home/components/SmallBanner.tsx";

export const HomePage = () => {
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: IcCalendar, onClick: () => undefined },
  ];
  const navigate = useNavigate();

  return (
    <Container>
      <HomeAppbar rightHeaderActionArr={rightHeaderActionArr} />
      <ContentsDiv  onClick={() => navigate(`/rules/${1}`)}>
        <ContentImg src={ImgRules} width={'100%'} />
        <Text right={'20px'} bottom={'15px'}>우리가 지킬 10가지</Text>
      </ContentsDiv>
      <SmallContainer>
        <SmallBanner title={'판결'} image={fight} onClick={() => navigate('/judge-input')}/>
        <SmallBanner title={'화해'} image={reconciliation} />
      </SmallContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background: linear-gradient(to bottom, #00314C 0%, #000033 100%);
  padding-top: 23px;
`

const ContentsDiv = styled.div`
  width: 90.423%;
  flex-shrink: 0;
  border-radius: 20px;
  margin-top: 27px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  cursor: pointer;
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

const SmallContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 21px;
  padding-bottom: 30px;
`
