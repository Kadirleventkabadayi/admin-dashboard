import React, { useState } from "react";
import NewProductForm from "./NewProductForm";

const NewProductButton = () => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  const handleNewProductClick = () => {
    setShowNewProductForm(true);
  };

  return (
    <div className="text-end">
      <button className="btn btn-primary" onClick={handleNewProductClick}>
        New Product
      </button>

      {showNewProductForm && (
        <NewProductForm onClose={() => setShowNewProductForm(false)} />
      )}
    </div>
  );
};

export default NewProductButton;
