import React from 'react'
import './Home.css'

const Home = (props) => {
console.log("home",props.cardData)
    return (
        <div>
       
            <div className="cart-wrapper">
                <div className="image-wrapper">
                   <img height="300px" width="250px" src="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                </div>

                <div className="text-wrapper">
                    <span>
                        QMobile
                    </span>
                    <span>
                        Price : 16000PKR
                    </span>

                </div>

                <div className="button-wrapperr">
                   <button onClick={()=>props.cardHandler({name:"I Phone 11",Price:"10000"})} className="button-wrapper">Add To Cart</button>
                </div>
                <div className="button-wrapperr2">
                   <button onClick={()=>props.removeCardHandler()} className="button-wrapper2">Remove To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home
