import React from 'react'
import './Home.css'

const Header = (props) => {
    return (
        <div>
              <div className="add-to-cart">
             <span>{props.cardData.length}</span>
             <img src="https://thumbs.dreamstime.com/b/shopping-cart-add-item-icon-design-to-134749684.jpg" />

         </div>
        </div>
    )
}

export default Header
