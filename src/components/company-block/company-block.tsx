import { Link } from "react-router-dom"
import styled from "styled-components"

export const CompanyBlockDiv = styled.div`
display: flex;
align-items: center;
width: 330px;
border: 1px solid #000;
padding: 0.25rem;
gap: 0.25rem;
`

const CompanyTextDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

`;

const CompanyLink = styled(Link)`
display: flex;
height: 20px;
padding: 0;
margin: 0;
overflow: hidden;
`

const Span = styled.span`font-size: 0.5rem;`

type CompanyBlockProps = {
  // image_url?: string,
  // preview_url
  preview_small_url?: string,

  company: string,
  loan_isin: string,
  loan_id: number,
}

export function CompanyBlock({ preview_small_url, company, loan_isin, loan_id}: CompanyBlockProps) {
  return (
    <CompanyBlockDiv title={company}>
      <img src={preview_small_url ? `https://jetlend.ru/${preview_small_url}` : '../../assets/images/default/bond.jpg'} alt={company}  width={50} height={50}/>
      <CompanyTextDiv>
        <CompanyLink to={`https://jetlend.ru/invest/v3/company/${loan_id}/analytics`} >{company}</CompanyLink>
        <Span>{loan_isin}</Span>
      </CompanyTextDiv>
    </CompanyBlockDiv>
  )
}
