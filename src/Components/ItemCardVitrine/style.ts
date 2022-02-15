import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container:{
    display: "flex",
    flexDirection: "column",
    border: "2px solid #e0e0e0",
    minWidth: "280px",
    margin: "29px 10px 0px 10px",
    height: "441px",
  },
  boxImg:{
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    "& img":{
      width: 157
    }
  },
  productInfo:{
    display: "flex",
    flexDirection: "column",
    padding: 20,
    "& span, h2":{
      marginBottom: 30,
    },
    "& button":{
      color: "#fff",
    },
  },
  price:{
    color: "#27ae60",
    fontWeight: "bold",
  },
});