import styled from "styled-components";

export const OfferSumDiv = styled.div`
width: 100px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


export function OfferSum({principal_debt}: {principal_debt?: number}) {
  return <OfferSumDiv>{principal_debt} ₽</OfferSumDiv>
}


