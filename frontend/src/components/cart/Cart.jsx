import React from 'react'
import burger1 from "../../assets/burger.png"
import { Link } from 'react-router-dom';



const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);


const Cart = () => {
  const increment = (item) => { }
  const decrement = (item) => { }
  return (
    <section className="cart">
      <main>
        <CartItem title={"Cheese Burger"} img={burger1} value={0} increment={() => increment(1)} decrement={() => decrement(1)} />
        {/* <CartItem title={"Cheese Burger"} img={burger1} value={0} increment={() => increment(2)} decrement={() => decrement(2)} /> */}
        {/* <CartItem title={"Cheese Burger"} img={burger1} value={0} increment={() => increment(1)} decrement={() => decrement(1)} /> */}
        <article>
          <div>
            <h1>Subtotal</h1>
            <p>Rs{2000}</p>
          </div>
          <div>
            <h1>Tax</h1>
            <p>{2000 * 0.18}</p>
          </div>
          <div>
            <h1>Shipping Charges</h1>
            <p>{2000 * 0.1}</p>
          </div>
          <div>
            <h1>Total</h1>
            <p>{20000}</p>
          </div>

          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  )
};

export default Cart