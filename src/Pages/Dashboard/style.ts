import { makeStyles } from "@material-ui/core";
import { Hidden } from "@mui/material";

export const useStyles = makeStyles({
  container:{
    padding: 10,
    backgroundColor: "#f3f3f3",
    height: "100vh",
    overflowX: "hidden",
    "@media (min-width: 1000px)":{
      height: "100%",
    }
  },
  header:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "@media (min-width: 529px)":{
      justifyContent: "space-between",
    }
  },
  vitrineCart:{
    "@media screen and (min-width: 1000px)":{
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-around",
    }
  },
});