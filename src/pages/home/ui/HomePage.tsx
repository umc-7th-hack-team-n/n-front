import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import IcCalendar from "@shared/assets/icon/ic-calendar.svg";

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => undefined };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: IcCalendar, onClick: () => undefined },
  ];

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
    </>
  );
};

