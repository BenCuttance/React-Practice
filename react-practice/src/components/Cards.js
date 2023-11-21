import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic candles!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/skyrim.jpg'
                            text='Dragons Breath'
                            label='Candles'
                            path='/services'
                        />
                        <CardItem
                            src='images/fallout.png'
                            text='Nuka Quantum'
                            label='Candles'
                            path='/services'
                        />
                        <CardItem
                            src='images/skyrim.jpg'
                            text='Spriggans Sancturary'
                            label='Candles'
                            path='/services'
                        />
                        <CardItem
                            src='images/fallout.png'
                            text='Mutant Balls'
                            label='Candles'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
