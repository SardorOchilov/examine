import React, { Component } from 'react'
import classes from './price-controller.module.css'
export class PriceController extends Component {
  render() {
    return (
      <div>
        <h5 className={classes.title}>Price</h5>
        <p className={classes.price}>$565656</p>
        <input type="range" min={0} max={309999} />
      </div>
    )
  }
}

export default PriceController