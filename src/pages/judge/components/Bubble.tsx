import styled from "styled-components";
import React from "react";

interface BubbleProps {
  type: 'plaintiff' | 'defendant';
  value: string;
  handler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Bubble: React.FC<BubbleProps> = ({ type, value, handler }) => {
  const description = type === 'plaintiff' ? '원고1의 입장을 이야기 해주세요' : '피고1의 입장을 이야기 해주세요';

  return (
    <Container>
      <SpeechBubble type={type}>
        <TextArea type={type} value={value} onChange={handler} />
      </SpeechBubble>
      <Description>{description}</Description>
    </Container>
  );
};

export default Bubble;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeechBubble = styled.div<Pick<BubbleProps, 'type'>>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ type, theme }) => type === 'plaintiff' ? theme.colors.blue : theme.colors.green};
  border-radius: 30px;
  width: 100%;
  height: 133px;

  /* 꼬리를 추가하는 부분 */
  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    right: 20px;
    width: 20px;
    height: 20px;
    background-color: ${({ type, theme }) => type === 'plaintiff' ? theme.colors.blue : theme.colors.green};
    border-radius: 50%;
    clip-path: polygon(10% 0%, 50% 50%, 0% 100%);
    transform: rotate(-45deg);
  }
`;

const TextArea = styled.textarea<Pick<BubbleProps, 'type'>>`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  outline: none;
  background-color: transparent;
  color: white;
  resize: none;
  padding: 20px 15px;
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: white;
  margin-top: 7px;
`;
