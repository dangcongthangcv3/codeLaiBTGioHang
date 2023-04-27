import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { content } = this.props
        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{content.name}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className='row'>
                                <div className="col-md-6">
                                    <img src={content.image} alt=".." style={{width:'100%'}}/>
                                </div>
                                <div className="col-md-6">
                                    <h1>{content.name}</h1>
                                    <p><b>Price</b>: {content.price}</p>
                                    <b>Mô tả</b>
                                    <p>
                                        {content.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
