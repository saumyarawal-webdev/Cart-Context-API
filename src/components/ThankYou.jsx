
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate('/shop'); // Navigate to the shop page
  };

  const goToWel = () => {
    navigate('/'); // Navigate to the shop page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thank You for Shopping with us!!</h1>
      
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
