import React, { Component } from 'react'
import ProdItem from './ProdItem'

export default class ProdList extends Component {
renderProduct = ()=>{
  let {ProductsData, setStateModal} = this.props
    let arrJSX = ProductsData.map((products)=>{
        return <div className='col-4 mt-2' key={products.id}>
            <ProdItem productsData={products} setStateModal={setStateModal} />
        </div>
    });
    return arrJSX;    
}
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Danh sách sản phẩm List</h3>
        <div className="row">
            {this.renderProduct()}
        </div>
      </div>
    )
  }
}
