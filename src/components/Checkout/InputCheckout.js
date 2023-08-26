import styles from './InputCheckout.module.css';

const InputCheckout = (props) => {
    return <div className={`${styles.control} ${props.className}`}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </div>
}

export default InputCheckout;