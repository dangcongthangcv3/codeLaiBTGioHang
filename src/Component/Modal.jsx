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
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Mã</th>
                                        <th>Tên</th>
                                        <th>Hình ảnh</th>
                                        <th>Đơn giá</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{content.id}</td>
                                        <td>{content.name}</td>
                                        <td><img src={content.image} alt=".." style={{width:50}} /></td>
                                        <td>{content.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
