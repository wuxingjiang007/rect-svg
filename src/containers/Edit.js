import { connect } from 'react-redux';
import Edit from '../components/Edit/Edit';
import {remEdit, removeEdit} from '../actions';

// 是否可拖拽标识
let isDrag = false;

let old = {};

const getSvgCanvasSys = (e, old) => {
    let target = e.target;
    let targetX = parseInt(target.getAttribute('x'));
    let targetY = parseInt(target.getAttribute('y'));

    console.log(old.rectX)
    return {
        x: old.rectX +  e.clientX - old.mouseX,
        y: old.rectY +  e.clientY - old.mouseY
    }
}



const mapStateToProps = (state, ownProps) => (
    {
        
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onClick: (event) => {
            let e = event || window.event;
            // console.log(getSvgCanvasSys(e))
        },
        onMouseDown: (event) => {
            // console.log(e.target);
            let e = event || window.event;
            let target = e.target;
            // 存储当前鼠标已经元素位置信息， 打开可移动标识。
            isDrag = true;
            old = {
                rectX: parseInt(target.getAttribute('x')),
                rectY: parseInt(target.getAttribute('y')),
                mouseX: parseInt(e.clientX),
                mouseY: parseInt(e.clientY)
            }

           
        },
        onMouseMove: (event) => {
            
            let e = event || window.event;
            if(!isDrag) {
                return false;
            }
            dispatch(removeEdit(getSvgCanvasSys(e, old)))
            console.log(getSvgCanvasSys(e, old));
        },
        onMouseUp: (event) => {
            let e = event || window.event;
            isDrag = false;
            dispatch(remEdit(getSvgCanvasSys(e, old)))
        }
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);