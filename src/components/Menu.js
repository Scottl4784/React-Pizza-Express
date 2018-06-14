import React, { Component } from 'react'
import MenuItem from './MenuItem'
import menuData from '../pizzaData'

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                    <h1>Menu</h1>
                <div className="menu-container">
                {menuData.map((individualItem, i) => {
                    return (
                        <MenuItem
                            key={i}
                            name={individualItem.name}
                            price={individualItem.price}
                            description={individualItem.description}
                            image={individualItem.image}
                        />
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Menu