import Home from '../component/Home'
import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../services/Action/action'

const mapDispatchToProps= dispatch =>({
cardHandler: data=>dispatch(addToCart(data)),
removeCardHandler: data=>dispatch(removeToCart(data))

})

const mapStateToProps=state=>({
    cardData:state.cardItems,


})


export default connect(mapStateToProps,mapDispatchToProps) (Home);