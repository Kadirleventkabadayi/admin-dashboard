import React, { useEffect, useRef } from "react";
import "./styles/newProductForm.css"; // Yeni bir CSS dosyası oluşturun

const NewProductForm = ({ onClose }) => {
  const formRef = useRef(null);

  // Dışarı tıklamada formu kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose(); // Formu kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleme
  };

  return (
    <div className="new-product-form" ref={formRef}>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" name="productName" />
        </div>
        <div className="form-group">
          <label htmlFor="productBrand">Brand</label>
          <input type="text" id="productBrand" name="productBrand" />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input type="number" id="productPrice" name="productPrice" />
        </div>
        <div className="form-group">
          <label htmlFor="productStock">Stock</label>
          <input type="number" id="productStock" name="productStock" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
