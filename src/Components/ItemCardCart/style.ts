import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container:{
    display: "flex",
    padding: "10px",
    backgroundColor: "#fff",
    "& img":{
      maxHeight: "100px",
      background: "#DBD8D8",
    },
    "& h2":{
      margin: "0px 0px 5px 0px",
      fontSize: "15px",
    },
  },
  product:{
    margin: "0px 10px",
  },
  quantity:{
    
  },
  btnSumSub:{
    "& button":{
      borderRadius: "100%",
      width: 20,
      height: 20,
      padding: 0,
      margin: "3px 10px 0px 10px",
      border: 0,
      color: "#fff", 
    },
  },
  btnSum:{
    backgroundColor: "#27AE60",
  },
  btnSub:{
    backgroundColor: "#FF0000",
  },
  btnRemove:{
    height: 20,
    backgroundColor: "transparent",
    border: 0,
    marginLeft: "auto",
    "&:hover":{
      "& svg":{
        color: "#FF0000",
      },
    },
  },
});