import styled from "styled-components"
import { round2 } from "../../utils/utils"

export const CurrentPriceDiv = styled.div`
  width: 110px;
  border: 1px solid #000;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`


export function CurrentPrice({min_price}: {min_price?: number}) {

  const current = min_price ? `${round2(min_price * 100)  } %` : '-'
  return (
    <CurrentPriceDiv>{current}</CurrentPriceDiv>
  )
}
