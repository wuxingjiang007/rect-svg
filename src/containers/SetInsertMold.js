import { connect } from 'react-redux'

import Btn from '../components/Menu/Btn';



const mapStateToProps = (state, ownProps) =>{
    console.log(state)
    return {
        active: state.insertMold === ownProps.mold
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        
        dispatch({
            type: 'SET_INSERT_MOLD',
            mold: ownProps.mold
        })

    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Btn);