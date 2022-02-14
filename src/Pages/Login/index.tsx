import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useStyles } from "./style";
import Button from "../../Components/Button";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import { useAuth } from "../../Context/Auth/AuthContext";

interface SignInCredentials{
  email: string;
  password: string;
}

function Login({}) {

  const styles = useStyles();
  const history = useHistory();
  const {signIn} = useAuth();
 
  const formSchema  = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(formSchema),
  })

  const onSubmitFunction = (data: SignInCredentials) =>{
    signIn(data);
  }

  return (
    <Box className={styles.container}>
      <Header></Header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField fullWidth id="outlined-basic" error={!!errors.email?.message} label="E-mail" variant="outlined" margin="normal" {...register("email")} />
        <TextField fullWidth id="outlined-basic" error={!!errors.password?.message} type="password" label="Senha" variant="outlined" {...register("password")} />
        <Button color="#27AE60" text="Logar" type="submit"></Button>
        <Button color="#F5F5F5" text="Cadastrar" onClick={() => history.push("/signup")}></Button>
      </form>
    </Box>
  );
}

export default Login;
