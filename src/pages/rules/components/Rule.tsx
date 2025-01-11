import styled from "styled-components";

interface RuleProps {
  numberIcon: string;
  text: string | number;
}

const NumberDiv = ({ numberIcon, text }: RuleProps) => {
  return (
    <Container>
      <img src={numberIcon} width={'30px'} />
      <RuleText>{text}</RuleText>
    </Container>
  );
};

export default NumberDiv;

const Container = styled.div`
  display: flex;
  padding-top: 3.431%;
  padding-right: 3.264%;
  // flex: 1;
`;

const RuleText = styled.p`
  background-color: transparent;
  caret-color: white;
  color: white;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  width: 100%;
`;
