import { connect } from 'react-redux'
import {createEdit} from '../actions'
import EditMold from '../components/Mold/Mold'



const mapStateToProps = (state, ownProps) => ({
    ...state.edit,
})

const mapDispatchToProps = (dispach, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditMold);
