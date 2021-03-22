import Header from '../component/Header'
import {connect} from 'react-redux'


const mapDispatchToProps= dispatch =>({


})

const mapStateToProps=state=>({
    cardData:state.cardItems

})


export default connect(mapStateToProps,mapDispatchToProps) (Header);