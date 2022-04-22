import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <h2>{props.product.Name} </h2>
      </div>

      <div className="col-2 ">
        <h3>
          {" "}
          <span className="badge bg-secondary">
            ₹{props.product.price}
          </span>{" "}
        </h3>
      </div>

      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-info  text-white">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-outline-info "
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        <h3>
          {" "}
          <span className="badge bg-secondary">
            ₹{props.product.quantity * props.product.price}
          </span>{" "}
        </h3>
      </div>
      <button
        className="btn design col-1"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
