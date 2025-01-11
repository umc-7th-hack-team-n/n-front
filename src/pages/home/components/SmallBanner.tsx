import styled from "styled-components";
import React from "react";

interface SmallBannerProps {
  image: string;
  title: '판결' | '화해';
  onClick?: () => void;
}

const SmallBanner: React.FC<SmallBannerProps> = ({ image, title, onClick }) => {
  const description = title === '판결'
    ? '서로 이해가 어려울 땐\n제3자의 시선에서 답을 찾아보세요.'
    : '고요함 속에서 서로를 이해해 보세요.';
  const label = title === '판결' ? '판결하기' : '화해하기';

  return (
    <Container onClick={onClick}>
      <Content>
        <LargeText>{title}</LargeText>
        <SmallText>{description}</SmallText>
        <Label>{label}</Label>
      </Content>
      <img src={image} alt={title} />
    </Container>
  );
};

export default SmallBanner;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 12vh;
  min-height: 129px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f7ff;
  border: 1px solid #dddddd;
  border-radius: 20px;
  padding: 20px 14px 15px 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const LargeText = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  color: #121212;
`;

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #323232;
  white-space: pre-wrap;
`;

const Label = styled.div`
  display: inline-block;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  color: white;
  padding: 5px 18px;
  border-radius: 30px;
  background-color: black;
`;
