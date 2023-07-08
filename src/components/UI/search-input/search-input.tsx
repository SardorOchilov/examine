import React, { Component } from 'react'
import classes from './search-input.module.css'

export class SearchInput extends Component {
  render() {
    return (
      <input type="text" className={classes['search-input']} placeholder='Search'/>
    )
  }
}

export default SearchInput