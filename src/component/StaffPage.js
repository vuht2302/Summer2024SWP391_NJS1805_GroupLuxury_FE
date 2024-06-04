import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const StaffPageContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f7dc6f; /* yellow luxurious theme */
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LeftSection = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const RightSection = styled.div`
  width: 55%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const LiImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

// Component
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
    <StaffPageContainer>
      <Container>
        <LeftSection>
          <h2>Shopping Cart Information</h2>
          <StyledUl>
            {cart.map((item) => (
              <StyledLi key={item.id}>
                <LiImage src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
              </StyledLi>
            ))}
          </StyledUl>
          <p>
            Total Amount: {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p>
            Total Price: $
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </p>
        </LeftSection>
        <RightSection>
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
        </RightSection>
      </Container>
    </StaffPageContainer>
  );
}

export default StaffPage;
