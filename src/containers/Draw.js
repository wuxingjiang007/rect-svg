import { connect } from 'react-redux'

import Draw from '../components/Draw/Draw'

const mapStateToProps = (state, ownProps) => ({
    datas: state.datas
})

const mapDispatchToProps = (dispach, ownProps) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Draw);