import styles from './CheckoutAdress.module.css';
import InputCheckout from './InputCheckout';

const CheckoutAdress = () => {
    return <div>
        <InputCheckout label='Имя' input={{ type: 'text', id: 'name' }}/>
        <InputCheckout label='Фамилия' input={{ type: 'text', id: 'surname' }}/>
        <div className={styles.control}>
            <label htmlFor='city'>Город</label>
            <select id='city'>
                <option>Алматы</option>
                <option>Астана</option>
                <option>Шымкент</option>
            </select>
        </div>
        <InputCheckout label='Улица' input={{ type: 'text', id: 'street'}} className={styles['input-street']}/>
        <InputCheckout label='Дом' input={{ type: 'number', id: 'house'}} className={styles['input-house']}/>
    </div>
}

export default CheckoutAdress;