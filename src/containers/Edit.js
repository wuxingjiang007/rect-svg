import { connect } from 'react-redux';
import Edit from '../components/Edit/Edit';

const getFrameData = source => {
    return {
        mold: 'RECT',
        x: 50,
        y: 70,
        width: 70,
        height: 30,
        style: {
            'fill-opacity': '0.5',
            'stroke': 'black',
            'fill': 'none',
            'stroke-width': 2,
            'stroke-dasharray': '3 2'
        }
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        data: getFrameData(ownProps)
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);