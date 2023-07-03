import styled from "styled-components"
import { CompanyBlockDiv } from "../company-block/company-block"
import { CurrentPriceDiv } from "../current-price/current-price"
import { EffectiveRateDiv } from "../effective-rate/effective-rate"
import { EndDateDiv } from "../end-date/end-date"
import { InvestedContractsCountDiv } from "../invested-contracts-count/invested-contracts-count"
import { InvestedDebtDiv } from "../invested-debt/invested-debt"
import { OfferSumDiv } from "../offer-sum/offer-sum"
import { RatingDiv } from "../rating/rating"
import { BondLi } from "../row-bond/row-bond"
import { StatusProgressDiv } from "../status-progress/status-progress"


const TableHeaderDiv = styled(BondLi)`
  position: sticky;
  top: 0;
  font-size: 0.85rem;
  height: 3rem;
  background-color: #000;
  color: #FFF
`
export function TableHeader() {


  return (
  <TableHeaderDiv>
    <CompanyBlockDiv>Компания</CompanyBlockDiv>
    <OfferSumDiv>Предложение</OfferSumDiv>
    <EffectiveRateDiv>эффективная ставка</EffectiveRateDiv>
    <RatingDiv>рейтинг</RatingDiv>
    <EndDateDiv>дата погашения</EndDateDiv>
    <InvestedContractsCountDiv>Контрактов в портфеле</InvestedContractsCountDiv>
    <InvestedDebtDiv>Остаток долга по выпуску</InvestedDebtDiv>
    <InvestedDebtDiv>Остаток долга в портфеле</InvestedDebtDiv>

    <CurrentPriceDiv>Текущая Цена</CurrentPriceDiv>
    <StatusProgressDiv>Статус</StatusProgressDiv>

  </TableHeaderDiv>
  )
}
