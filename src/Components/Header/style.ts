import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  container:{
    display: "flex",
    alignItems: "center",
  },
  nameSpan:{
    fontFamily: "Potta One",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#6A6A6A",
    fontSize: "17px",
  },
  subNameSpan:{
    backgroundColor: "#27AE60",
    color: "#fff",
    padding: "4px",
    marginLeft: "5px",
    borderRadius: "9px",
  },
});