import styled from "styled-components"

export const EndDateDiv = styled.div`
width: 110px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`


export function EndDate({end_date}: {end_date: string}) {
  return (
    <EndDateDiv>{end_date}</EndDateDiv>
  )
}
