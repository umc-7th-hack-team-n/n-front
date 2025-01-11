import styled from 'styled-components';
import { HeaderAction } from '@shared/types';

interface AppBarProps {
  rightHeaderActionArr?: HeaderAction[];
  m_nickname: string;
  f_nickname: string;
}

const HomeAppbar = ({ rightHeaderActionArr, f_nickname, m_nickname }: AppBarProps) => {
  console.log(f_nickname, m_nickname);
  return (
    <Wrapper>
      <TextContainer>
        <LargeText>{f_nickname} ❤️ {m_nickname}</LargeText>
        <SmallText>님 오늘도 진심 어린 대화로 하루를 마무리해요</SmallText>
      </TextContainer>
      <IconContainer>
        {rightHeaderActionArr?.map((action, index) => (
          <img
            key={index}
            src={action.icon}
            onClick={action.onClick}
            style={{ background: 'none' }}
            alt="right-icon"
          />
        ))}
      </IconContainer>
    </Wrapper>
  );
};

export default HomeAppbar;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-width: 440px;
  height: 7vh;
  min-height: 53px;
  align-items: center;
  padding: 16px 20px;

  img {
    flex-shrink: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;


const IconContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const LargeText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: bold;
  color: white;
`;

const SmallText = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: white;
  display: flex;
  align-items: flex-end;
`;
