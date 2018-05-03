import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Btn extends Component {
    render() {
        return (
            <button 
            // disabled={this.props.active}
            onClick={this.props.onClick}>
            {this.props.text}
            </button>
        )
    }
}

Btn.propTypes = {
    // active: PropTypes.bool.isRequired,
    text: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }
  

export default Btn;