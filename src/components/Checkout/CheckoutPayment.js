import styles from './CheckoutPayment.module.css';
import InputCheckout from './InputCheckout';

const CheckoutPayment = () => {
    return <div>
        <InputCheckout label='Номер Карты' input={{ type: 'text', id: 'card-number' }}/>
        <div className={styles.control}>
            <label htmlFor='card-type'>Тип Карты</label>
            <select id='card-type'>
                <option>Visa</option>
                <option>Master Card</option>
            </select>
        </div>
        <InputCheckout label='Год' input={{ type: 'date', id: 'card-year' }} className={styles['input-year']}/>
        <InputCheckout label='CVV' input={{ type: 'number', id: 'cvv' }} className={styles['input-cvv']}/>
    </div>
}

export default CheckoutPayment;