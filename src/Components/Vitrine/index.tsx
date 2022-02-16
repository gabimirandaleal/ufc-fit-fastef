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
          productFilter.map((item, index) =>(
            <ItemCardVitrine key={index} product={item}/>
          ))
        :
        product.map((item) =>(
          <ItemCardVitrine key={item.id} product={item}/>
        ))
      }
    </Box>
  );
}
export default Vitrine;
