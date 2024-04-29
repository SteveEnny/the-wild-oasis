import styled, { css } from "styled-components";

// const type = {
//   row: css`
//     /* display: flex; */
//     justify-content: space-between;
//     align-items: center;
//   `,
//   coloum: css`
//     flex-direction: column;
//     gap: 1rem;
//   `,
// };
const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;

/* ${(props) => type[props.row]}
  ${(props) => type[props.coloum]} */
