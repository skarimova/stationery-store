import styles from "./HeaderButton.module.css";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";

const HeaderButton = (props) => {

    const [isButtonAnimated, setIsButtonAnimated] = useState(false)

    const cartContext= useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item)=>{return currentValue+item.amount}, 0)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`
    useEffect(()=>{
        if(cartContext.items.length === 0){ return; }
        setIsButtonAnimated(true)

        const timer = setTimeout(()=>{ setIsButtonAnimated(false) }, 300)

        return ()=>{ clearTimeout(timer) }
    }, [cartContext.items])

    return <React.Fragment>
        <button className={buttonClasses} onClick={props.onClick}>
            <span>Корзина</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
        <button className={styles['logout-button']} onClick={props.onLogout}>
            <span>Выйти</span>
        </button>
    </React.Fragment>
}

export default HeaderButton;