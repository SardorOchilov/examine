import React, { Component } from 'react'
import classes from './categories.module.css'
import axios from 'axios'

class Categories extends Component {
  state = {
    categories: []
  }
  async componentDidMount() {
    const categories = (await axios.get('https://dummyjson.com/products/categories')).data;

    this.setState({categories: ['All', ...categories]});
  }
  render() {
    return (
      <div>
        <span className={classes.title}>Category</span>
        <div className={classes.list}>
            {this.state.categories.map((category, idx) => {
              return (
                <a href='/' className={`${classes.li} ${idx === 0 ? classes.active: ''}`}>{category}</a>
              );
            })}
        </div>
      </div>
    )
  }
}

export default Categories