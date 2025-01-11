import styled from "styled-components";
import React from "react";

interface SmallBannerProps {
  image: string;
  title: '판결' | '화해';
}

const SmallBanner: React.FC<SmallBannerProps> = ({image, title}) => {
  const description = title === '판결'
    ? '서로 이해가 어려울 땐\n제3자의 시선에서 답을 찾아보세요.'
    : '고요함 속에서 서로를 이해해 보세요.';

  return (
    <SmallContetnsDiv title={title}>
      <img src={image} alt='banner-image'/>
      <Text bottom={'75px'}>{title}</Text>
      <SmallText>{description}</SmallText>
    </SmallContetnsDiv>
  );
}

export default SmallBanner;

const SmallContetnsDiv = styled.div<Pick<SmallBannerProps, 'title'>>`
  width: 42.523%;
  // height: 83.34%;
  height: 287px;
  // max-height: 287px;
  padding: 0 17px 15px 17px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${({title}) => title === '판결' ? '#3b6cf3' : '#ff8669' };
  border-radius: 20px;
  position: relative;
  // aspect-ratio: 1.73 / 1
  background-color: ${({title}) => title === '판결' ? '#dee5ff' : '#ffeae5'};
  cursor: pointer;
`

const SmallText = styled.div`
  font-family: Pretendard;
  font-size: 9px;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 35px;
  width: 100%;
  white-space: pre-line;
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
