import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "10px",
    background: "#F3F3F3",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "20px",
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "5px",
    background: "#FFFFFF",
    border: "2px solid #F5F5F5",
  },
});
