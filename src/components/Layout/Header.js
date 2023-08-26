import React from "react";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Канцелярские товары</h1>
            {props.showCartButton && <HeaderButton onClick={props.onShowCart} onLogout={props.onLogout}/>}
        </header>
    </React.Fragment>
}

export default Header;