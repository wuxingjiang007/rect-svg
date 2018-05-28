import { connect } from 'react-redux'
import {createEdit, setFocus, clearFocus} from '../actions'
import Mold from '../components/Mold/Mold'



const mapStateToProps = (state, ownProps) => {
    return {
        // active: state.edit.id === ownProps.data.id,
        // data: state.datas,
    }
}

const mapDispatchToProps = (dispach, ownProps) => ({
    onClick: () => {
        dispach(createEdit(ownProps))
        dispach(clearFocus())
        dispach(setFocus(ownProps))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mold);
