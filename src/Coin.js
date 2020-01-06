import React, { Component } from 'react'
import CoinFlipper from './CoinFlipper';
import qf from './images/quarter_front.JPG';

class Coin extends Component {
    render() {
        return (
            <div>
                <h1>Let's Flip a coin</h1>
                <img src={qf} alt="front of quarter"  />
                <div>
                <button>Flip Me!</button>
                </div>
               <div>
                   <p>Out of 20 flips, there have been 12 
                       heads and 8 tails</p>
               </div>
            
            </div>
            
        )
    }
}


export default Coin;