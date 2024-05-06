import React, { useEffect, useRef } from "react";
import "./styles/newProductForm.css";
import post from "../utils/Post";

const NewProductForm = ({ onClose }) => {
  const generateRandomId = () => {
    let randomId = 0;
    for (let i = 0; i < 3; i++) {
      randomId += randomNumber() * Math.pow(10, i);
    }
    return randomId;
  };

  const randomNumber = () => Math.floor(Math.random() * 10);

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    const form = event.target;
    const formData = new FormData(form);
    formData.append("_id", generateRandomId());
    const productData = Object.fromEntries(formData.entries());

    post("http://localhost:4000/products", productData);
  };
  return (
    <div className="new-product-form" ref={formRef}>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="productBrand">Brand</label>
          <input type="text" id="productBrand" name="brand" />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input type="number" id="productPrice" name="price" />
        </div>
        <div className="form-group">
          <label htmlFor="productStock">Stock</label>
          <input type="number" id="productStock" name="stock" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
