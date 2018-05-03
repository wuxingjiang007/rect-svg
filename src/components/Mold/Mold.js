import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Mold extends Component {
    render() {
        const data = this.props.data;

        switch (data.mold) {
            case 'RECT':
                
                return (
                    <rect 
                    {...data}
                    onClick={this.props.onClick}
                    ></rect>
                );
            case 'CIRCLE':
                return (
                    <circle 
                    {...data}
                    onClick={this.props.onClick}
                    ></circle>
                )
            default:
                return '';
        }
      
    }
}

Mold.propTypes = {
    active: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
  

export default Mold;