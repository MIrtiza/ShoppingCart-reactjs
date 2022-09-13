import { useState } from "react";

const Items = [
  {
    name: "MAngo",
    price: 2.1
  },
  {
    name: "Apple",
    price: 3.4
  },
  {
    name: "Orange",
    price: 2
  }
];
export const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const AddToCart = (item) => {
    const cartCopy = [...cart];
    const itemInCart = cartCopy.find((i) => i.name === item.name); //its checking the item of cart is already is there or not.
    if (itemInCart) {
      itemInCart.quantity += 1;
      setCart(cartCopy);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };
  const increase = (name) => {
    let cartCopy = [...cart];
    const item = cartCopy.find((i) => i.name === name);
    item.quantity += 1;
    setCart(cartCopy);
  };
  const decrese = (name) => {
    let cartCopy = [...cart];
    const item = cartCopy.find((i) => i.name === name);
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cartCopy = cartCopy.filter((i) => i.name !== name);
    }

    setCart(cartCopy);
  };
  return (
    <>
      <div className="cart" style={{ display: "flex" }}>
        <div className="items" style={{ width: "50%" }}>
          <h2> Items </h2>
          {Items.map((item) => (
            <div key={item.name}>
              <h3> {item.name} </h3>
              <h4> ${item.price} </h4>

              <button onClick={() => AddToCart(item)}> Add to cart </button>
            </div>
          ))}
        </div>
        <div style={{ width: "50%" }}>
          <h2> Cart </h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3> {item.name} </h3>
              <p>
                <button onClick={() => decrese(item.name)}> - </button>
                {item.quantity}
                <button onClick={() => increase(item.name)}> + </button>
              </p>
              <p> Subtotal: $ {(item.quantity * item.price).toFixed(2)} </p>
            </div>
          ))}
        </div>

        <div className="total">
          <h2>
            Total: $
            {cart.reduce((acc, i) => acc + i.quantity * i.price, 0).toFixed(2)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
