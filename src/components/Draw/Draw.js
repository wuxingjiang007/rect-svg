import React, { Component } from 'react';
import './index.css';
import Mold from '../../containers/Mold';
import Edit from '../../containers/Edit';

class Draw extends Component {
    render() {
        let data = this.props.datas
        return (
        <div className="Draw" id="Drawing">
            <svg xmlnx="http://www.w3.org/2000/svg" width="300" height="400">
                {data.map((item) => (
                <Mold 
                key={item.id}
                data={item}>
                </Mold>))}
                <Edit/>
            </svg>
        </div>
      );
    }
    componentDidMount() {
        console.log(this);
    }
  }
  
export default Draw;
  