import { HeaderAction } from "@shared/types";
import IcCalendar from "@shared/assets/icon/ic-calendar.svg";
import styled from "styled-components";
import ImgRules from "@shared/assets/image/img-home-rules.png";
import { useNavigate } from "react-router";
import HomeAppbar from "@home/components/HomeAppbar.tsx";
import fight from "@icon/ic-conflict.svg";
import reconciliation from "@icon/ic-reconciliation.svg";
import SmallBanner from "@home/components/SmallBanner.tsx";
import { useGetCoupleInfo } from "@home/feature/useGetCoupleInfo.ts";

export const HomePage = () => {
  const id = 1
  const navigate = useNavigate();
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: IcCalendar, onClick: () => navigate('/calendar') },
  ];

  const { data, isLoading, isError } = useGetCoupleInfo(id);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Container>
      <HomeAppbar rightHeaderActionArr={rightHeaderActionArr} f_nickname={data!.data.f_nickname} m_nickname={data!.data.m_nickname}/>
      <Banner onClick={() => navigate('/rules/1')}>
        <Label>우리가 지킬 10가지</Label>
      </Banner>
      <SmallContainer>
        <SmallBanner title={'판결'} image={fight} onClick={() => navigate('/judge-input')}/>
        <SmallBanner title={'화해'} image={reconciliation} onClick={() => navigate('/alarm')} />
      </SmallContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background: linear-gradient(to bottom, #00314C 0%, #000033 100%);
  gap: 30px;
  padding: 23px 20px;
`;

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${ImgRules});
  background-size: cover;
  border-radius: 20px;
`;

const Label = styled.p`
  width: fit-content;
  font-size: 16px;
  font-weight: 400;
  color: white;
  line-height: 22px;
  background-color: black;
  border: none;
  border-radius: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  padding: 5px 17px;
`;


const SmallContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px
`;
