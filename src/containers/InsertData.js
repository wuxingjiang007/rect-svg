import { connect } from 'react-redux'
import { insertData } from '../actions'
import Btn from '../components/Menu/Btn';

const getDefaultData = (mold) => {
    switch (mold) {
        case 'RECT': 
            return {
                mold,
                x: 10,
                y: 10,
                width: 80,
                height: 60
            };
        
        case 'CIRCLE':
            return {
                mold,
                cx: 100,
                cy: 100,
                r: 30,
                style: {
                    stroke: '#000',
                    fill:"red"
                }
            };
        default:
            return {};
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        active: state.insertMold === ownProps.mold
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(insertData(getDefaultData(ownProps.mold)))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Btn);