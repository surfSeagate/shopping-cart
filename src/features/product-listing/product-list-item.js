import React from "react";
import AddButton from "./add-btn";
import RemoveButton from "./remove-btn";

const ProductListItem = props => {
  return (
    <div className="product-list-item">
      <h3>{props.name} </h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div> {props.product.description}</div>
      <div> ${props.product.price}</div>
      <div>
        <AddButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveButton
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductListItem;
