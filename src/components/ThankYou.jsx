import { useNavigate } from 'react-router-dom';
import InvoiceTable from './InvoiceTable';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';


const ThankYou = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  

  const goToShop = () => {
    navigate('/shop'); // Navigate to the shop page
  };

  const goToWel = () => {
    navigate('/'); // Navigate to the welcome screen
  };

  // Function to download the invoice as PDF
 const done = ()=>{
  const table=document.getElementById('con1');
  table.innerHTML=`<img src="gift.gif"/>`;
  cart.setItems([]);
  const btn=document.getElementById('done');
  btn.style.display="none";
 }

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thank You for Shopping with us!!</h1>
      <div id="con1"><InvoiceTable/></div>
      
       {/* Download Invoice Button */}
       <div className="mb-4">
        <button
          onClick={done} id="done"
          className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
        >
          Done
        </button>
      </div>
      {/* Buttons for navigation */}
      <div className="flex gap-4">
        <button
          onClick={goToShop}
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Store
        </button>

        <button
          onClick={goToWel}
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Welcome Screen
        </button>
      </div>

     
    </div>
  );
};

export default ThankYou;
