import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category_ID: "",
    condition_ID: "",
    material_ID: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!product.name) formErrors.name = "Product name is required";
    if (!product.description)
      formErrors.description = "Description is required";
    if (!product.price || isNaN(product.price))
      formErrors.price = "Valid price is required";
    if (!product.category_ID) formErrors.category = "Category is required";
    if (!product.condition_ID)
      formErrors.condition_ID = "condition_ID is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Product added:", product);
      // Reset form
      setProduct({
        name: "",
        description: "",
        price: "",
        category_ID: "",
        condition_ID: "",
        material_ID: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      boxSizing: "border-box",
    },
    textarea: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      boxSizing: "border-box",
    },
    error: {
      color: "red",
      fontSize: "0.8em",
    },
    button: {
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#28a745",
      color: "white",
      fontSize: "1em",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add New Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
          {errors.description && (
            <span style={styles.error}>{errors.description}</span>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.price && <span style={styles.error}>{errors.catid}</span>}
        </div>{" "}
        <div style={styles.formGroup}>
          <label style={styles.label}>category_ID:</label>
          <input
            type="text"
            name="category_ID"
            value={product.category_ID}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.category_ID && (
            <span style={styles.error}>{errors.category_ID}</span>
          )}
        </div>
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
