import { Box } from "@mui/material";
import { useProduct } from "../../Context/Product/ProductContext";
import ItemCardVitrine from "../ItemCardVitrine";
import { useStyles } from "./style";

function Vitrine({}) {
  const styles = useStyles();
  const {product, productFilter} = useProduct();

  return (
    <Box className={styles.products}>
      {
        productFilter.length > 0 ?
          productFilter.map((item) =>(
            <ItemCardVitrine product={item}/>
          ))
        :
        product.map((item) =>(
          <ItemCardVitrine product={item}/>
        ))
      }
    </Box>
  );
}
export default Vitrine;
