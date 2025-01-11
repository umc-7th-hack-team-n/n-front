import AppBar from "@shared/ui/AppBar";
import { HeaderAction } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import styled from "styled-components";
import NumberDiv from "../components/NumberDiv";

import Ic1 from "@icon/numbers/ic-number-1.svg";
import Ic2 from "@icon/numbers/ic-number-2.svg";
import Ic3 from "@icon/numbers/ic-number-3.svg";
import Ic4 from "@icon/numbers/ic-number-4.svg";
import Ic5 from "@icon/numbers/ic-number-5.svg";
import Ic6 from "@icon/numbers/ic-number-6.svg";
import Ic7 from "@icon/numbers/ic-number-7.svg";
import Ic8 from "@icon/numbers/ic-number-8.svg";
import Ic9 from "@icon/numbers/ic-number-9.svg";
import Ic10 from "@icon/numbers/ic-number-10.svg";
import { useNavigate } from "react-router";

const RulesPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
    return (
        <>
        <AppBar leftHeaderAction={leftHeaderAction} title="사랑의 10계명" />
        <Container>
            <RuleBox>
                <RuleTitle>우리 이것만은 꼭 지키자!</RuleTitle>
                <NumberDiv numberIcon={Ic1} />
                <NumberDiv numberIcon={Ic2} />
                <NumberDiv numberIcon={Ic3} />
                <NumberDiv numberIcon={Ic4} />
                <NumberDiv numberIcon={Ic5} />
                <NumberDiv numberIcon={Ic6} />
                <NumberDiv numberIcon={Ic7} />
                <NumberDiv numberIcon={Ic8} />
                <NumberDiv numberIcon={Ic9} />
                <NumberDiv numberIcon={Ic10} />
            </RuleBox>
            <Button>완료</Button>
        </Container>
        </>
    );
}

export default RulesPage;

const Container = styled.div`
    padding: 2.747% 5.089%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const RuleBox = styled.div`
    background-color: #393A3E;
    width: 100%;
    height: 80.636%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-itmes:center;
    padding: 4.288% 1.7% 6.003% 1.7%;
`

const RuleTitle = styled.div`
    color: white;
    text-align: center;
`

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