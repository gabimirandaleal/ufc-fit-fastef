import { Box } from "@mui/material";
import { useStyles } from "./style";

function Header() {
  const styles = useStyles();

  return(
    <Box className={styles.container}>
        <span className={styles.nameSpan}>UFC</span>
        <span className={styles.subNameSpan}>Burguer</span>
    </Box>
  );
}

export default Header;
