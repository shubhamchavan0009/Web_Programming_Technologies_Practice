import Home from "../compoents/Home"
import { addToCart } from "../services/Actions/Action"
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)