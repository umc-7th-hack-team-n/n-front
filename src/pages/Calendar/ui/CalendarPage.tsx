import AppBar from "@shared/ui/AppBar.tsx";
import {HeaderAction} from "@shared/types";
import Modal from "@calendar/components/Modal.tsx"
// import Modal from "../components/Modal.tsx";

import Calendar from "react-calendar";
import {useState, useCallback} from "react";
import {NavigateFunction, useNavigate} from "react-router";

import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";

import {useGetCalendar} from "@calendar/feature/useGetCalendar.ts";
// import {useGetCalendar} from "../feature/useGetCalendar.ts";

import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import IcCalendarMarked from "@shared/assets/icon/ic-calendar-marked.svg";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarPage = () => {
    const [value, setValue] = useState<Value>(new Date());
    const [conflitID, setConflitID] = useState<number>(0);
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const navigate: NavigateFunction = useNavigate();
    const leftHeaderAction: HeaderAction = {icon: IcLeftArrow, onClick: () => navigate(-1)};
    const customMonth: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const {data} = useGetCalendar(dayjs(value).format("YYYY-MM"));

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const onClickModalButton = useCallback(() => {
        navigate("/judge-result", {state: conflitID});
    }, [setConflitID]);

    const onClickMarkedDate = (id: number): void => {
        setConflitID(id)
        onClickToggleModal();
    }

    const handleMonth = (activeMonth: Date) => {
       if(activeMonth){
           setValue(activeMonth);
       }
    }

    const tileContent = ({date, view}: { date: Date; view: string }) => {
        if (view === "month") {
            const formattedDate = dayjs(date).format("YYYY-MM-DD"); // 로컬 시간 기준으로 날짜 형식화
            const markedDate = data?.success.find((item) => item.date === formattedDate);

            if (markedDate?.date) {
                return (
                    <MarkedImage
                        src={IcCalendarMarked}
                        onClick={() => onClickMarkedDate(markedDate.conflict_id)} // 올바른 날짜 전달
                    />
                );
            }
        }
        return (<EmptyDate/>);
    };

    return (
        <>
            <AppBar leftHeaderAction={leftHeaderAction} title="캘린더"/>
            {isOpenModal && <Modal onClickModalButton={onClickModalButton} onClickToggleModal={onClickToggleModal}/>}
            <StyledCalendarWrapper>
                <Calendar
                    locale="ko-KR"
                    calendarType='gregory'
                    value={value}
                    onChange={setValue}
                    tileContent={tileContent}
                    view="month"
                    nextLabel={"▶"}
                    prevLabel={"◀"}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    onActiveStartDateChange={({ activeStartDate }) => {handleMonth(activeStartDate);}}
                    formatShortWeekday={(locale, date) => customMonth[date.getDay()]}
                    formatDay={(locale, date) => dayjs(date).format("D")}
                />
            </StyledCalendarWrapper>

        </>
    );
};
const MarkedImage = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 12px;
`
const EmptyDate = styled.div`
    width: 30px;
    height: 30px;
    margin-top: 12px;
`
const StyledCalendarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 39px;
    padding: 0px 20px;

    // 캘린더 전체

    .react-calendar {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: none;
        padding: 17px;
    }

    // 캘린더 전체 컬러

    .react-calendar__month-view {
        abbr {
            color: ${(props) => props.theme.colors.beige};
        }
    }

    // 캘린더 요일 밑줄 제거

    .react-calendar__month-view__weekdays__weekday {
        text-transform: none; /* 기본 텍스트 형식 유지 */
    }

    // 캘린더 요일 표시 설정

    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        color: #A8A8A8;
    }

    // 캘린더 헤더 이동 버튼

    .react-calendar__navigation button {
        color: ${(props) => props.theme.colors.beige};
        font-size: 1rem;
        font-weight: bold;
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus,
    .react-calendar__navigation button --active {
        background: none;
    }

    .react-calendar__tile {
        width: 100%;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 12px;

    }

    .react-calendar__tile--now {
        position: relative;
        background: none;

        abbr {
            z-index: 10;
            color: ${(props) => props.theme.colors.beige};
        }
    }

    .react-calendar__tile--now::before {
        content: '';
        position: absolute;
        top: 12%;
        left: 23%;
        width: 28px;
        height: 28px;
        border-radius: 28px;
        background-color: #FF7B6A;
    }
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus,
.react-calendar__tile--active {
    background: none;
`