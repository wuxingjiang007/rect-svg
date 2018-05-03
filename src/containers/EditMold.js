import { connect } from 'react-redux'
import {createEdit} from '../actions'
import EditMold from '../components/Mold/Mold'



const mapStateToProps = (state, ownProps) => ({
    data: state.edit,
    className: ownProps.className
})

const mapDispatchToProps = (dispach, ownProps) => ({
   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditMold);