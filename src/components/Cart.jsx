import { useContext } from "react";
import { CartContext } from "../context/Cart";

import { useNavigate } from "react-router-dom";
function Cart() {
  const cart = useContext(CartContext);

  const total = cart.items.reduce((a, b) => a + Number(b.price), 0);
  const navigate = useNavigate();

  const goOut = () => {
    navigate("/thankyou"); // Navigate to the shop page
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {cart && cart.items.length > 0 ? (
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
        ) : (
          <p className="text-center text-gray-500 mt-4 font-semibold">Cart is empty.</p>
        )}

        <tbody>
          {cart &&
            cart.items.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">&#8377;{item.price}</td>
                <td className="px-6 py-4">
                  <button onClick={() => cart.removeItem(index)}>
                    <svg
                      className="w-6 h-6 text-black hover:text-red-500 cursor-pointer transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <polyline points="3 6 5 6 21 6" />{" "}
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                      <line x1={10} y1={11} x2={10} y2={17} />{" "}
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}

          {cart && cart.items.length > 0 && (
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <th></th>
              <th className="px-6 py-4">&#8377;{total}</th>

              <th></th>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      {cart && cart.items.length > 0 && (
        <div className="flex justify-end">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={goOut}
          >
            Checkout
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
      )}
    </div>
  );
}

export default Cart;
