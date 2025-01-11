import styled from "styled-components";
import logo from '@icon/ic-logo.svg'
import { useNavigate } from "react-router";

const OnboardingPage = () => {
  const navigate = useNavigate();

  const start = () => {
    navigate('/home')
  }

  return (
    <Container>
      <Logo src={logo}/>
      <Button onClick={start}>시작하기</Button>
    </Container>
  );
};

export default OnboardingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom right, #0b0b0b 35%, #005999 100%) no-repeat center;
  justify-content: flex-end;
  padding: 31px 20px;
  gap: 45%;
`;

const Logo = styled.img`
  width: 100%;
`;

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
