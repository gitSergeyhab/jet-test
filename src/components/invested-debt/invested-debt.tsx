import styled from "styled-components";

export const InvestedDebtDiv = styled.div`
width: 100px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

// invested_company_debt
export function InvestedDebt({invested_debt} : {invested_debt?: number}) {
  return (
    <InvestedDebtDiv>{invested_debt} ₽</InvestedDebtDiv>
  )
}
