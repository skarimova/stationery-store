import Card from '../UI/Card';
import styles from './Checkout.module.css';
import CheckoutAdress from './CheckoutAddress';
import CheckoutPayment from './CheckoutPayment';

const Checkout = () => {
    return <Card className={styles.checkout}>
        <CheckoutAdress/>
        <CheckoutPayment/>
    </Card>
}

export default Checkout;
