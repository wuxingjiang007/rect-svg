import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Mold.css';

class Mold extends Component {
    render() {
        const data = this.props.data;
        // let getClassName = data => {
        //     let type = data.type;
        //     let mold = data.mold;
        //     console.log(data)
        //     switch (type) {
        //         case 'EDIT':
                    
        //             return 'edit' + mold;
            
        //         default:
        //             return '';
        //     }
        // };
        let node = () => {
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

        return <g>{node()}</g>;
        
      
    }
}

// Mold.propTypes = {
//     active: PropTypes.bool.isRequired,
//     data: PropTypes.object.isRequired,
//     onClick: PropTypes.func.isRequired
// }
  

export default Mold;