import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        return (
            <div id='menu' className='menu-item menu-list'>
                <div><img src={this.props.image} /></div>
                <div className='menu-desciption'>
                    <div className='menu-item-name'>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.price}
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuItem
