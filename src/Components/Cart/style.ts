import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    margin: "20px 0 0 0",

    width: "100%",

    "@media (min-width: 1000px)": {
      maxWidth: 430,
      minWidth: 430,
    },
  },
  cart: {
    margin: 0,
    borderRadius: "0px 0px 5px 5px",
    backgroundColor: "#f5f5f5",
    borderLeft: "2px solid #e0e0e0",
    borderRight: "2px solid #e0e0e0",
    borderBottom: "2px solid #e0e0e0",
    minWidth: 200,
    "@media (min-width: 1000px)": {
      maxWidth: 430,
    },
  },
  itemCartEmpty: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    minHeight: "158px",
  },
  containerPrice: {
    padding: 10,
  },
  infoPrice: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px, solid #E0E0E0",
    padding: 2,
    marginBottom: "5px",
    "& span": {
      marginTop: 7,
    },
  },
  titleCart: {
    color: "#fff",
    backgroundColor: "#27AE60",
    borderRadius: "5px 5px 0px 0px",
    height: 65,
    paddingLeft: "21px",
    alignItems: "center",
    paddingTop: "10px",
    "& h1": {
      margin: 0,
      fontSize: "20px",
    },
  },
});
