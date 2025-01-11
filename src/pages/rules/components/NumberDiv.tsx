import styled from "styled-components";
import React from "react";

interface NumberDivProps {
  numberIcon: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberDiv = ({numberIcon, value, handler}: NumberDivProps) => {
    return (
        <Container>
            <img src={numberIcon} width={'30px'} />
            <InputRule value={value} onChange={handler} />
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
