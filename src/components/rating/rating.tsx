import styled from "styled-components";

export const RatingDiv = styled.div`
width: 60px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;



export function Rating({rating} : {rating: string}) {
  return (
    <RatingDiv>{rating}</RatingDiv>
  )
}
