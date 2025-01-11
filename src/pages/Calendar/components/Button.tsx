import styled from "styled-components";
interface ButtonProps {
    text: string;
    rightIcon? : string;
    onClick?: () => void;
}
const Button = ({ text, rightIcon, onClick} : ButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            <ButtonBlank/>
            <ButtonText>{text}</ButtonText>
            <ButtonIcon src={rightIcon}/>
        </ButtonContainer>
    );
};

export default Button;

const ButtonContainer = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #003459;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 25px;
`

const ButtonText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
`
const ButtonBlank = styled.div`
    width: 30px;
    height: 30px;
`
const ButtonIcon = styled.img`
    width: 30px;
    height: 30px;
`