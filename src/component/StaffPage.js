import React, { useState } from "react";

function StaffPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Gold Ring", price: 100, quantity: 2, image: "ring.jpg" },
    {
      id: 2,
      name: "Diamond Necklace",
      price: 500,
      quantity: 1,
      image: "necklace.jpg",
    },
  ]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    city: "",
    district: "",
    ward: "",
    address: "",
  });

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleDeliveryInfoChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    console.log("Order placed:", cart, customerInfo, deliveryInfo);
  };

  return (
    <div className="staff-page">
      <div className="container">
        <div className="left-section">
          <h2>Shopping Cart Information</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>
            Total Amount: {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p>
            Total Price: $
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </p>
        </div>
        <div className="right-section">
          <h2>Customer Informations</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleCustomerInfoChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={handleCustomerInfoChange}
              />
            </label>
          </form>
          <h2>Form of Receipt</h2>
          <form>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={handleDeliveryInfoChange}
              />
            </label>
            <br />
            <label>
              District:
              <input
                type="text"
                name="district"
                value={deliveryInfo.district}
                onChange={handleDeliveryInfoChange}
              />
            </label>
            <br />
            <label>
              Ward:
              <input
                type="text"
                name="ward"
                value={deliveryInfo.ward}
                onChange={handleDeliveryInfoChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={deliveryInfo.address}
                onChange={handleDeliveryInfoChange}
              />
            </label>
          </form>
          <button onClick={handleOrder}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;
