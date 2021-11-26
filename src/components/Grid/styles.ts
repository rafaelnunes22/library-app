import styled from "styled-components";

export const Grid = styled.div`

display: grid;
grid-template-columns: 24px auto 24px;

@media(min-width: 1024px) {
  grid-template-columns: auto 1024px auto;
}
`;

export const GridItem = styled.div`
  grid-column: 2;
`;