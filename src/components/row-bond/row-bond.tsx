import styled from "styled-components";
import { Bond } from "../../types/types";
import { CompanyBlock } from "../company-block/company-block";
import { CurrentPrice } from "../current-price/current-price";
import { EffectiveRate } from "../effective-rate/effective-rate";
import { EndDate } from "../end-date/end-date";
import { InvestedContractsCount } from "../invested-contracts-count/invested-contracts-count";
import { InvestedDebt } from "../invested-debt/invested-debt";
import { OfferSum } from "../offer-sum/offer-sum";
import { Rating } from "../rating/rating";
import { StatusProgress } from "../status-progress/status-progress";


export const BondLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px black solid;
`

export function RowBond({bond} : {bond: Bond}) {


  const {
    amount, borrower_type, company, end_date, image_url, interest_rate, invested_company_debt, invested_contracts_count,
    invested_debt, loan_class, loan_id, loan_isin, loan_name, loan_order, min_price, preview_small_url, preview_url,
    principal_debt, progress, rating, status, term, term_left, ytm
  } = bond;
  return (
  <BondLi>
    <CompanyBlock company={company} loan_id={loan_id} loan_isin={loan_isin} preview_small_url={preview_small_url} />
    <OfferSum principal_debt={principal_debt}/>
    <EffectiveRate ytm={ytm}/>
    <Rating rating={rating}/>
    <EndDate end_date={end_date}/>
    <InvestedContractsCount invested_contracts_count={invested_contracts_count}/>
    <InvestedDebt invested_debt={invested_debt}/>
    <InvestedDebt invested_debt={invested_company_debt}/>
    <CurrentPrice min_price={min_price}/>
    <StatusProgress status={status} progress={progress}/>
  </BondLi>
  )

}
