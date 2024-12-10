import { useContext } from "react";
import { CartContext } from "../context/Cart";
import PropTypes from 'prop-types';

function Card(props) {
  const cart = useContext(CartContext);

const handleAddToCart = () => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.items.findIndex(item => item.name === props.name);

    if (existingItemIndex !== -1) {
      // Item exists, update the quantity
      const updatedItems = cart.items.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1, // Increment the quantity
            price: (item.quantity +1)*item.sprice,
          };
        }
        return item;
      });
      cart.setItems(updatedItems); // Update the state with the new items array
    } else {
      // Item doesn't exist, add it with quantity 1
      const newItem = { name: props.name, price: props.price, quantity: 1 , sprice:props.price};
      cart.setItems([...cart.items, newItem]); // Add new item to the cart
    }
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Price : &#8377;{props.price}
      </p>
      <button
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleAddToCart}
      >
        Add to Cart
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string, // 'name' must be a string and is required
  price: PropTypes.number, // 'price' must be a number and is required
  sprice: PropTypes.number
};

export default Card;
