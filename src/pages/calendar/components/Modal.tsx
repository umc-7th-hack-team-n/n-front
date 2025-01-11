import {PropsWithChildren} from "react";
import styled from "styled-components";
import IcModalClose from "@icon/ic-modal-cancel.svg";
import IcModalBreak from "@icon/ic-modal-break.svg";
import IcRightArrow from "@icon/ic-right-arrow.svg";
import Button from "@pages/calendar/components/Button.tsx";

interface ModalDefaultType {
    onClickModalButton: () => void;
    onClickToggleModal: () => void;
}

const Modal = ({onClickModalButton, onClickToggleModal}: PropsWithChildren<ModalDefaultType>) => {
    const closeModal = () => {
        if (onClickToggleModal) {
            onClickToggleModal();
        }
    }

    return (
        <ModalContainer>
            <ModalBox>
                <ModalTitleContainer>
                    <ModalTitle>왜 다퉜는지, 함께 돌아봐요</ModalTitle>
                    <ModalCloseButton src={IcModalClose} onClick={closeModal}/>
                </ModalTitleContainer>
                <ModalContentContainer>
                    <ModalContentImage src={IcModalBreak}/>
                    <ModalContentText>같은 이유로 또 다투고 싶지 않다면,</ModalContentText>
                    <ModalContentText>우리의 지난 갈등을 함께 살펴봐요</ModalContentText>
                </ModalContentContainer>
                <ModalButtonContainer>
                    <Button text={"판결문 보러가기"} onClick={onClickModalButton} rightIcon={IcRightArrow}/>
                </ModalButtonContainer>
            </ModalBox>
            <ModalDim onClick={closeModal}/>
        </ModalContainer>
    )

}

export default Modal;

const ModalContainer = styled.div`
    width: 100vw;
    max-width: 440px;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
`

const ModalBox = styled.dialog`
    width: calc(100% - 72px);
    height: 53vh;
    border-radius: 23px;
    display: block;
    background-color: white;
    z-index: 1000;
`
const ModalDim = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
`
const ModalTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 26px;
`
const ModalTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
`

const ModalCloseButton = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 23px;
    top: -3px;
`
const ModalContentContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 36px;
    flex-direction: column;
    align-items: center;
`
const ModalContentImage = styled.img`
    width: 175px;
    height: 175px;
    margin-bottom: 25px;
`
const ModalContentText = styled.h3`
    color: #323232;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`
const ModalButtonContainer = styled.div`
    width: 100%;
    padding: 0px 44px;
    margin-top: 34px;
`
