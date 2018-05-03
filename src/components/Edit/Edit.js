import React, {Component} from 'react';
import EditMold from '../../containers/EditMold';

class Edit extends  Component {
    render () {
        return(
            <g display="inline" 
            onMouseDown={this.props.onMouseDown}
            onMouseMove={this.props.onMouseMove}
            onMouseUp={this.props.onMouseUp}
            onClick={this.props.onClick}>
                <EditMold className={this.props.className}></EditMold>
            </g>
        )
    }
}

export default Edit;