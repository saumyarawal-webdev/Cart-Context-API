

import './App.css'
import Card from './components/Card'
import Cart from './components/Cart'
function App() {


  return (
    <>
    <h1 className="text-3xl font-extrabold">Products</h1>
    <div className="flex flex-wrap gap-4 p-4">
      
      <Card name="Mouse" price="350"/>
      <Card name="Keyboard" price="800"/>
      <Card name="Monitor" price="8000"/>
      <Card name="Speaker" price="2000"/>
      <Card name="Headphones" price="1000"/>
      <Card name="Mouse Pad" price="120"/>
      <Card name="HDMI Cable" price="550"/>
      <Card name="Mobile" price="10000"/>
      <Card name="Charger" price="900"/>
      <Card name="Camera" price="20000"/>
      <Card name="Pen Drive" price="1000"/>
      <Card name="Hard Disk" price="550"/>

    </div>
    <h1 className="text-3xl font-extrabold">Cart</h1>
      <Cart/> 

    </>
  )
}

export default App
