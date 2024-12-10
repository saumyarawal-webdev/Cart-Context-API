
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
function InvoiceTable() {
    const cart = useContext(CartContext); // Get cart data from context
    const total = cart.items.reduce((a, b) => a + Number(b.price), 0);
  return (
    <>
    {/* Invoice Table */}
    <div className="overflow-x-auto w-full max-w-4xl mb-8">
        <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-600">Item</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-600">Quantity</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-600">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-3 text-gray-700">{item.name}</td>
                <td className="px-6 py-3 text-gray-700">{item.quantity}</td>
                <td className="px-6 py-3 text-gray-700">&#8377; {item.sprice}</td>
                <td className="px-6 py-3 text-gray-700">&#8377; {item.price}</td>
              </tr>
              
            ))}
            <tr className="border-t border-gray-200 bg-gray-200">
              <th colSpan={3} className="px-6 py-3 text-gray-700 text-start font-semibold">Grand Total</th>
              <th className="px-6 py-3 text-gray-700 text-start font-semibold">&#8377;{total}</th>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default InvoiceTable