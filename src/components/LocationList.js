import React, { Component } from 'react'
import Location from './Location'
import locationData from '../locationData'


class LocationList extends Component {
    render() {
        return (
            <div id='locations' className='locations'>
                <h1>Locations</h1>
                    <div className="locations location-list">
                        {locationData.map((individualItem, i) => {
                            return (
                                <Location
                                    key={i}
                                    name={individualItem.name}
                                    address={individualItem.address}
                                    phone={individualItem.phone}
                                />
                            )
                        })}
                    </div>
                </div>
        )
    }
}

export default LocationList