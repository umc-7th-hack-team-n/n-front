import styled from "styled-components";

const NumberDiv = ({numberIcon}: { numberIcon: string }) => {
    return (
        <Container>
            <img src={numberIcon} width={'30px'} />
            <InputRule />
        </Container>
    );
};

export default NumberDiv;

const Container = styled.div`
    display: flex;
    padding-top: 3.431%;
    padding-right: 3.264%;
    // flex: 1;
`

const InputRule = styled.input`
    background-color: transparent;
    caret-color: white;
    color: white;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    width: 100%;
`