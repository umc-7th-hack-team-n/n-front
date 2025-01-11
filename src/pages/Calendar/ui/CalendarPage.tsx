import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction} from "@shared/types";
import { useNavigate } from "react-router";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";

export const CalendarPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };

    return (
       <>
           <AppBar leftHeaderAction={leftHeaderAction} title={"캘린더"}/>
       </>
    );
};
