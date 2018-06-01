import React, {Component} from 'react';
import EditMold from '../../containers/EditMold';

class Edit extends  Component {
    render () {
        return(
            <g display="inline">
                <EditMold
                onMouseDown={this.props.onMouseDown}
                onMouseMove={this.props.onMouseMove}
                onMouseUp={this.props.onMouseUp}
                onClick={this.props.onClick} className={this.props.className} source={this.props.source}></EditMold>
            </g>
        )
    }

    componentDidMount() {
      document.addEventListener('mousemove',this.props.onMouseMove);
    }
}

export default Edit;
