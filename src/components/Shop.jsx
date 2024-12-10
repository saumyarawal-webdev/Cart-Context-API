import Card from './Card';
import Cart from './Cart';

function Shop() {
  return (
    <>
      {/* Products Section */}
      <div className="p-8 bg-gray-100 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Products</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Card name="Mouse" price="350" />
          <Card name="Keyboard" price="800" />
          <Card name="Monitor" price="8000" />
          <Card name="Speaker" price="2000" />
          <Card name="Headphones" price="1000" />
          <Card name="Mouse Pad" price="120" />
          <Card name="HDMI Cable" price="550" />
          <Card name="Mobile" price="10000" />
          <Card name="Charger" price="900" />
          <Card name="Camera" price="20000" />
          <Card name="Pen Drive" price="1000" />
          <Card name="Hard Disk" price="3000" />
          
        </div>
      </div>

      {/* Cart Section */}
      <div className="p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Cart</h1>
        <Cart />
      </div>
    </>
  );
}

export default Shop;
