import styles from "./PromoText.module.css";

const PromoText = () => {
    return <section className={styles['promo-text']}>
        <h2>Магазин Канцелярских Товаров</h2>
        <p>Большой выбор канцелярских, офисных товаров в онлайн-магазине. 
            Наш интернет-магазин канцтоваров предлагает все, что нужно для стабильной работы каждого офиса. 
            Любая компания нуждается в офисных товарах, без которых сотрудники не смогут выполнить свои 
            ежедневные обязанности. Мы доставим все заказанные канцелярские товары прямо в офис в кратчайшие сроки. 
            Мы дорожим своей безупречной репутацией более 25 лет! Нам можно доверять!</p>
    </section>
}

export default PromoText;