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
  confirmPassword?: string;
  name: string;
}

function Signup({}) {

  const styles = useStyles();
  const history = useHistory();
  const {signUp} = useAuth();
 
  const formSchema  = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    name: yup.string().required("Nome obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Senhas não coincidem")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(formSchema),
  })

  const onSubmitFunction = (data: SignInCredentials) =>{
    delete data.confirmPassword
    signUp(data);
  }

  return (
    <Box className={styles.container}>
      <Header></Header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField fullWidth id="outlined-basic" error={!!errors.name?.message} label="Nome" variant="outlined" margin="normal" {...register("name")} />
        <TextField fullWidth id="outlined-basic" error={!!errors.email?.message} label="E-mail" variant="outlined" margin="normal" {...register("email")} />
        <TextField fullWidth id="outlined-basic" error={!!errors.password?.message} type="password" label="Senha" margin="normal" variant="outlined" {...register("password")} />
        <TextField fullWidth id="outlined-basic" error={!!errors.confirmPassword?.message} type="password" label="Confirmar Senha" margin="normal" variant="outlined" {...register("confirmPassword")} />
        <Button color="#27AE60" text="Cadastrar" type="submit"></Button>
        <Button color="#F5F5F5" text="Logar" onClick={() => history.push("/")}></Button>
      </form>
    </Box>
  );
}

export default Signup;
