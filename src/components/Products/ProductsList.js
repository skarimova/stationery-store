import { useEffect, useState } from "react";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import styles from "./ProductsList.module.css";

const STATIONERY = [
    {
      id: "p1",
      name: "Ручка",
      description: 'Ручка шариковая Luxor "Super 1", 0,6 мм, корпус ассорти, синяя',
      price: 11.99,
    },
    {
      id: "p2",
      name: "Маркер",
      description: "Маркер-краска Berlingo (металл, дерево, стекло, пластик), цвет черный",
      price: 3.99,
    },
    {
      id: "p3",
      name: "Папка",
      description: "Папка Стамм, А4 формат, на 4 кольцах, корешок 40 мм, черная",
      price: 4.99,
    },
    {
      id: "p4",
      name: "Бейдж",
      description: "Бейдж горизонтальный Deli, 98*73 мм, с клипсой",
      price: 7.99,
    },
];

const ProductsList = () => {

    const [productsList, setProductsList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
      const newStationary = STATIONERY.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase()))
      // console.log(newStationary)
      setProductsList(newStationary)
    }, [searchValue])

    const numAscendingHandler = () => {
      const numAscending = [...productsList].sort((a, b) => a.price - b.price);
      // console.log(numAscending);
      setProductsList(numAscending)
    }

    const numDescendingHandler = () => {
      const numDescending = [...productsList].sort((a, b) => b.price - a.price);
      // console.log(numDescending);
      setProductsList(numDescending)
    }
    
    const list = productsList.map(product => <ProductItem key={product.id} id={product.id} name={product.name} description={product.description} price={product.price}/>)

    return <section className={styles.products}>
        <Card>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name"/>
            <button onClick={numAscendingHandler}>Sort price from low to high</button>
            <button onClick={numDescendingHandler}>Sort price from high to low</button>
            <ul>{list}</ul>
        </Card>
      </section>
}

export default ProductsList;