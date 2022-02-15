import { Box } from "@mui/material";
import { useStyles } from "./style";
import {FaSignOutAlt} from "react-icons/fa"
import { useState } from "react";
import { useProduct } from "../../Context/Product/ProductContext";

function Search({}) {
  const styles = useStyles();
  const [input, setInput] = useState("");
  const {product, searchProduct} = useProduct();

  const filtrarProducts = (text: string) =>{
    setInput(text)
    searchProduct(text);
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.search}>
        <input type="text"
               placeholder="Digitar Pesquisa"
               value={input}
               onChange={(evt) => filtrarProducts(evt.target.value)} 
        />
        <button type="submit" onClick={() => setInput("")}>Pesquisar</button>
      </Box>
      <FaSignOutAlt />
    </Box>
  );
}

export default Search;
