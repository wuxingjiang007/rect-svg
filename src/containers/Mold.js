import { connect } from 'react-redux'
import {createEdit} from '../actions'
import Mold from '../components/Mold/Mold'



const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {
        active: state.edit.id === ownProps.data.id
    }
}

const mapDispatchToProps = (dispach, ownProps) => ({
    onClick: () => {
        dispach(createEdit(ownProps))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mold);