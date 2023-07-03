import styled from "styled-components"

const roundYtm = (ytm: number) => Math.round(ytm*10000)/100


export const EffectiveRateDiv = styled.div`
width: 110px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export function EffectiveRate({ytm}: {ytm?: number}) {
  const value = ytm ? `${roundYtm(ytm)  }%` : ''
  return (
    <EffectiveRateDiv>{value}</EffectiveRateDiv>
  )
}
