import AppBar from "@shared/ui/AppBar";
import { HeaderAction, RulesReq } from "@shared/types";
import IcLeftArrow from "@shared/assets/icon/ic-left-arrow.svg";
import styled from "styled-components";
import NumberDiv from "../components/NumberDiv";
import { ErrorContainer } from "./RulesPage";

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
import { useEffect, useState } from "react";
import { usePutPromise } from "@pages/rules/feature/usePutPromise.ts";
import { useGetPromise } from "../feature/useGetPromise";
import { RulesResponse } from "@shared/types";

const arr = [
    { number: 1, icon: Ic1 },
    { number: 2, icon: Ic2 },
    { number: 3, icon: Ic3 },
    { number: 4, icon: Ic4 },
    { number: 5, icon: Ic5 },
    { number: 6, icon: Ic6 },
    { number: 7, icon: Ic7 },
    { number: 8, icon: Ic8 },
    { number: 9, icon: Ic9 },
    { number: 10, icon: Ic10 },
]

const RulesModifyPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
    
    // RulesReq 타입으로 상태 정의
    const [rules, setRules] = useState<RulesReq>({
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
        text6: "",
        text7: "",
        text8: "",
        text9: "",
        text10: "",
    });

    // 기능 수정: 작성 시 이전에 입력한 데이터 남아있도록
    const { data, isLoading, isError } = useGetPromise(1);
    const { mutate, isPending } = usePutPromise();

    // 수정
    useEffect(() => {
        if (data?.success) {
            const prevRules: RulesResponse = data.success;

            // 상태 업데이트
            setRules((prev) => {
                const updatedRules = { ...prev };
                for (let i = 1; i <= 10; i++) {
                const key = `text${i}`;
                updatedRules[key] = String(prevRules[`text${i}` as keyof RulesResponse]);
                }
                return updatedRules;
            });
        }
    }, [data]);

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
    };

    const onSubmit = () => {
        mutate(rules);
    };

    const handleChange = (index: number, value: string) => {
        const key = `text${index + 1}` as keyof RulesReq;
        setRules((prevRules) => ({
            ...prevRules,
            [key]: value,
        }));
    };

    return (
        <>
        <AppBar leftHeaderAction={leftHeaderAction} title="사랑의 10계명" />
        <Container>
            <RuleBox>
                <RuleTitle>우리 이것만은 꼭 지키자!</RuleTitle>
                {arr.map((item, index) => (
                    <NumberDiv key={index} value={rules[`text${index + 1}` as keyof RulesReq]} numberIcon={item.icon} handler={(e) => handleChange(index, e.target.value)} />
                ))}
            </RuleBox>
            <Button onClick={onSubmit} disabled={isPending}>완료</Button>
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
