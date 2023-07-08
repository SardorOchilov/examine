import React, { Component } from 'react'
import HeaderBar from '../components/header-bar/header-bar'
import Products from '../container/products/products'

class Layout extends Component {
  render() {
    return (
      <>
      <HeaderBar></HeaderBar>
      <Products />
      
      </>
    )
  }
}

export default Layout