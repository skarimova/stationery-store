import CartContext from "../../store/Cart-context";
import styles from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import { useContext } from "react";

const ProductItem = (props) => {
    const cartContext = useContext(CartContext);

    const formattedPrice = `$${props.price.toFixed(2)}`;

    const addToCartToHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return <li className={styles.product}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{formattedPrice}</div>
        </div>
        <div>
            <ProductItemForm id={props.id} onAddToCart={addToCartToHandler}/>
        </div>
    </li>
}

export default ProductItem;