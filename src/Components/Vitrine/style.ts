import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  products:{
    display: "flex",
    overflow: "auto",
    marginLeft: "21px",
    width: "100%",
    boxSizing: "border-box",
    "@media (min-width: 1000px)":{
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: "10px",
      overflow: "hidden",
    }
  }
});