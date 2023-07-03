import styled from "styled-components"

export const InvestedContractsCountDiv = styled.div`
width: 100px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


export function InvestedContractsCount({invested_contracts_count}: {invested_contracts_count?: number}) {
  return (
    <InvestedContractsCountDiv>{invested_contracts_count}</InvestedContractsCountDiv>
  )
}
