import React, { Component } from "react";
import classes from "./products.module.css";
import SearchInput from "../../components/UI/search-input/search-input";
import Categories from "../../components/UI/categories/categories";
import PriceController from "../../components/UI/price-controller/price-controller";
import ProductGrid from "../../components/product-grid/product-grid";

class Products extends Component {
 

  render() {
    return (
      <div className="container">
        <div className="row mt-4 justify-content-between">
          <div className="col-2">
            <SearchInput />
            <Categories />
            <PriceController></PriceController>
          </div>
          <div className="col-10">
            <ProductGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
