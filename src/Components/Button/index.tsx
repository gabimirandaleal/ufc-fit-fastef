import { ButtonHTMLAttributes } from "react";
import { useStyles } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

function Button({ text, color, type, onClick }: ButtonProps) {
  const styles = useStyles();

  return (
    <button className={styles.btn} type={type} style={{backgroundColor: color, color: color === "#27AE60" ? "#ffffff" : "#999999"}} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
