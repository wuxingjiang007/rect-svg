import React, { Component } from 'react';

import {insertMold} from '../../actions/index'

import Btn from '../../containers/InsertData'


class Menu extends Component {
   render () {
       return (
           <div className="Menu">
                <Btn text="插入矩形" mold={insertMold.RECT}></Btn>
                <Btn text="插入圆" mold={insertMold.CIRCLE}></Btn>
           </div>
       )
   }
}

export default Menu;