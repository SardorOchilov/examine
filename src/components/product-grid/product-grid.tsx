import React, { Component } from "react";
import classes from "./product-grid.module.css";
import axios from "axios";


class ProductGrid extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const data = await (await axios.get("https://dummyjson.com/products")).data;
    const { products } = data;
    this.setState({ products });
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.products.length} Products Found</p>
        </div>
        <div className="row">
          {this.state.products.map((product, idx) => {
            console.log(product);
            return (
              <div key={idx} className={`col-4 mb-5 ${classes.product}`}>
                <div className={`mb-4 ${classes["product-img"]}`}>
                  <img src={product["images"][0]} alt="modern poster" />
                  <div className={classes.backdrop}></div>
                  <div className={classes.btn}>
                    <a href="/products">
                      <i className={`fas fa-search ${classes["search"]}`}></i>
                    </a>
                  </div>
                </div>
                <div className={classes["product-footer"]}>
                  <h5 className={`${classes["product-title"]}`}>
                    {product["title"]}
                  </h5>
                  <p className={classes.price}>${product["price"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductGrid;
