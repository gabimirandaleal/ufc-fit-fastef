import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg":{
      width: 30,
      height: 30,
      color: "#BDBDBD",
      margin: "10px 10px 0px 10px",
    }
  },
  search:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "300px",
    margin: "10px 10px 0px 10px",
    padding: "10px",
    border: "2px solid #E0E0E0",
    borderRadius: "8px",
    "& input":{
      backgroundColor: "transparent",
      border: 0,
      height: "35px",
      marginRight: "5px",
      width: "100%",
    },
    "& input::placeholder":{
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "19px",
      color: "#E0E0E0",
    },
    "& button":{
      backgroundColor: "#27ae60",
      border: "0px",
      height: "35px",
      borderRadius: "8px",
      width: "110px",
      color: "#fff",
    },
    "& button:hover":{
      backgroundColor: "#39D178B9",
      color: "#000",
      cursor: "pointer",
    },
    "& @media screen and (min-width: 529px)":{
      minWidth: "343px",
    }
  },
});