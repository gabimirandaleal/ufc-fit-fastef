import { Box } from "@mui/material";
import {useStyles} from "./style"
import {useCart} from "../../Context/Cart/CartContext"
import Button from "../Button";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface ItemCardVitrineProps{
    product: Product;
}

function ItemCardVitrine({product}:ItemCardVitrineProps) {
    const styles = useStyles();
    const {addProduct} = useCart();

    return(
        <Box className={styles.container}>
            <Box className={styles.boxImg}>
                <img src={product.img} alt={product.name} />
            </Box>
            <Box className={styles.productInfo}>
                <h2>{product.name}</h2>
                <span>{product.category}</span>
                <span className={styles.price}>{`R$ ${(product.price.toFixed(2)).toString().replace(".", ",")}`}</span>
                <Button text="Adicionar" onClick={() => addProduct(product)} color="#27AE60"></Button>
            </Box>
        </Box>
    );
}

export default ItemCardVitrine;