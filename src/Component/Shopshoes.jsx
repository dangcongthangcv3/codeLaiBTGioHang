import React, { Component } from 'react'
import ProdList from './ProdList'
import Modal from './Modal'
import { arrProduct } from '../assets/data/data'

export default class Shopshoes extends Component {
    state = {
        productDetail: {
            "id": 0,
            "name": "",
            "alias": "",
            "price": 0,
            "description": "",
            "shortDescription": "",
            "quantity": 0,
            "image": ""
        }
    }
    setStateModal = (setStateModal) => {
        this.setState({
            productDetail:setStateModal
        })
    }
    render() {
        return (
            <div>
                <ProdList ProductsData={arrProduct} setStateModal={this.setStateModal}/>
                <Modal content={this.state.productDetail} />
            </div>
        )
    }
}
