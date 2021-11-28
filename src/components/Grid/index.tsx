import { ReactElement } from "react";
import { Grid, GridItem } from "./styles";

type Props = {
  children: ReactElement | ReactElement[];
};

function LayoutGrid({ children }: Props) {
  return <Grid role="grid" >
    <GridItem>
      {children}
    </GridItem>
  </Grid>
}

export { LayoutGrid as Grid };