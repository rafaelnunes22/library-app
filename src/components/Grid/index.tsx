import { ReactElement } from "react";
import { Grid, GridItem } from "./styles";

type Props = {
  children: ReactElement | ReactElement[];
};

function LayoutGrid({ children }: Props) {
  return <Grid >
    <GridItem>
      {children}
    </GridItem>
  </Grid>
}

export { LayoutGrid as Grid };