import React, { Component } from 'react'

export default class ProdDetail extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Danh sách sản phẩm</h3>
        <div className='row'>
            
            <div className='card'>
                <img src="./img" alt=".." height={'100%'} />
                <div className="card-body">
                    <h3>ProductName</h3>
                    <p>Price</p>
                    <button className='btn btn-success'>Xem chi tiết</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
