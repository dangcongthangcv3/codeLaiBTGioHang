import React, { Component } from 'react'

export default class ProdItem extends Component {
  render() {
    let { productsData,setStateModal } = this.props
    return (
      <div className='card'>
        <img src={productsData.image} alt=".." />
        <div className="card-body">
          <h3>{productsData.name}</h3>
          <p>{productsData.price}</p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{
            setStateModal(productsData)
          }}>
            Chi tiết
          </button>
        </div>
      </div>
    )
  }
}
