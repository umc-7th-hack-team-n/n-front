import AppBar from "@shared/ui/AppBar";
import { HeaderAction, RulesResponse } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import styled from "styled-components";

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
import Rule from "@pages/rules/components/Rule.tsx";
import { useGetPromise } from "@pages/rules/feature/useGetPromise.ts";
import IcPen from "@icon/ic-pen.svg";

const icons = [Ic1, Ic2, Ic3, Ic4, Ic5, Ic6, Ic7, Ic8, Ic9, Ic10];

const RulesModifyPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const rightHeaderAction: HeaderAction[] = [{ icon: IcPen, onClick: () => navigate(`/rules-modify`) }];
  const { data, isLoading, isError } = useGetPromise(1);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError || !data?.success) {
    return (
      <ErrorContainer>
        <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
        <Button onClick={() => navigate(-1)}>돌아가기</Button>
      </ErrorContainer>
    );
  }

  const rules: RulesResponse = data.success;

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="사랑의 10계명" rightHeaderActionArr={rightHeaderAction} />
      <Container>
        <RuleBox>
          <RuleTitle>우리 이것만은 꼭 지키자!</RuleTitle>
          {icons.map((icon, index) => {
            const ruleText = rules[`text${index + 1}` as keyof RulesResponse];
            return <Rule key={index} numberIcon={icon} text={ruleText} />;
          })}
        </RuleBox>
        <Button onClick={() => navigate(-1)}>확인</Button>
      </Container>
    </>
  );
}

export default RulesModifyPage;

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
    justify-content: space-between;
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

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  text-align: center;

  & > p {
    margin-bottom: 20px;
  }
`;
