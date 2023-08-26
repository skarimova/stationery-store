import styles from './LoginButton.module.css';

const LoginButton = (props) => {
    return <button className={styles.button} disabled={props.disabled}>Вход</button>
}

export default LoginButton;