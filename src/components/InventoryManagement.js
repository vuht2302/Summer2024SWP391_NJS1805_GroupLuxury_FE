import React from 'react';

class InventoryManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        { id: 1, item: "Item 1", quantity: 10 },
        { id: 2, item: "Item 2", quantity: 5 },
        { id: 3, item: "Item 3", quantity: 8 }
      ] // Default inventory items
    };
  }

  // Function to update inventory quantity
  updateQuantity = (id, newQuantity) => {
    this.setState(prevState => ({
      inventory: prevState.inventory.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  render() {
    return (
      <div>
        <h2>Inventory Management</h2>
        <ul>
          {this.state.inventory.map(item => (
            <li key={item.id}>
              {item.item} - Quantity: {item.quantity}
              <button onClick={() => this.updateQuantity(item.id, item.quantity + 1)}>
                +1
              </button>
              <button onClick={() => this.updateQuantity(item.id, item.quantity - 1)}>
                -1
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InventoryManager;
