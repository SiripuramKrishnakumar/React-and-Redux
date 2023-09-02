import { Fragment, useContext, useRef } from "react";

import {ProductContext} from '../Store/Context/ProductsContext';
import classes from './Products.module.css';

const Products = () => {

  const prodName = useRef();
  const prodPrice = useRef();

  const productContextVal = useContext(ProductContext);

  console.log(productContextVal.products);
  const products = productContextVal.products;

  const Add = () => {
    if(prodName.current.value && prodPrice.current.value)
    {
      productContextVal.addProduct({
        name: prodName.current.value,
        price: prodPrice.current.value,
      });
      // prodName.current.value = "";
      // prodPrice.current.value = "";
    }
  };
 
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3 form-group">
          <label className="form-label" style={{ color: "greenyellow" }}>
            {" "}
            Name:{" "}
          </label>
          <input className="form-control" ref={prodName} />
        </div>
        <div className="col-md-3 form-group">
          <label className="form-label" style={{ color: "greenyellow" }}>
            {" "}
            Price:{" "}
          </label>
          <input className="form-control" ref={prodPrice} />
        </div>
        <div className="col-md-1 form-group">
          <label className="form-label" style={{ color: "greenyellow" }}>
            {" "}
            &nbsp;{" "}
          </label>
          <button className="btn btn-success form-control" onClick={Add}>
            Add
          </button>
        </div>
      </div>
      <br />
      <center>
        <h2 style={{ color: "green" }}>Products from Context.</h2>
        <br />
        <table className="table table-bordered"  style={{ display:"block", width:'fit-content', overflowY: 'scroll', height:'300px'}}>
          <thead >
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            </tr>
          </thead>
          <tbody >
            {products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Products;