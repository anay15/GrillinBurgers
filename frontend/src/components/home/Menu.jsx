import React from 'react'
import { motion } from 'framer-motion'
import Item from './Item'
import burger1 from "../../assets/burger.png"
const Menu = () => {
    const addToCartHandler = (itemNum) => { };
    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                {/* <Item itemNum={1} burgerSrc={me} price={200} title="Cheese Burger" /> */}
                {/* <Item/> */}
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.1} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.5} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.8} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.1} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.5} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.8} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.1} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.3} />
                <Item itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.5} />
            </div>
        </section>
    )
}

export default Menu
