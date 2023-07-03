import styled from "styled-components"
import { round2 } from "../../utils/utils";

// const StatusProgressFillDiv = styled.div<{progress?: number}>`
//   width : ${({progress}) => `${`${(progress||0)*100  }%`}`};
//   height: 12px;
//   border-radius: 4px;
//   background-color: #20836d;
// `
// const StatusProgressWrapperDiv = styled.div`
//   width: 100%;
//   height: 12px;
//   background-color: transparent;
//   border: solid 1px #20836d;
//   border-radius: 4px;

// `


export const StatusProgressDiv = styled.div`
width: 90px;
border: 1px solid #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

type StatusProgressProps = {
  status: string,
  progress?: number
}

export function StatusProgress({status, progress}: StatusProgressProps) {

  return <StatusProgressDiv> { round2((progress || 0) * 100) } %</StatusProgressDiv>

  // return (
  //   <StatusProgressWrapperDiv title={status}><StatusProgressFillDiv progress={progress}>{(progress || 0) * 100}</StatusProgressFillDiv></StatusProgressWrapperDiv>
  // )

}
