import React from 'react';
import AppBar from "@shared/ui/AppBar.tsx";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";

export const CalendarPage = () => {
    return (
       <>
           <AppBar leftHeaderAction={IcLeftArrow}/>
       </>
    );
};
