import { Link } from "react-router-dom"
import styled from "styled-components";


const TradeLinkDiv = styled.div`
width: 50px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

type TradeLinkProps = {
  loan_id: number,
}


export function TradeLink({loan_id}: TradeLinkProps) {
  return (
    <TradeLinkDiv><Link to={`https://jetlend.ru/invest/v3/company/${loan_id}/market`}>Торговать</Link></TradeLinkDiv>
  )

}
