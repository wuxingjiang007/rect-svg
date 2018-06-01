import { connect } from 'react-redux';
import Edit from '../components/Edit/Edit';
import {resetEdit, resetData,translateData} from '../actions';

// 是否可拖拽标识
let isDrag = false;

let startPoints = {};

const getSvgCanvasSys = (e) => {
    return {
        x: startPoints.boxX +  e.clientX - startPoints.mouseX,
        y: startPoints.boxY +  e.clientY - startPoints.mouseY
    }
}

const mapStateToProps = (state, ownProps) => (
    {

    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onClick: (event) => {
            // let e = event || window.event;
            // getSvgCanvasSys(e);
            // setTimeout(()=> {
            //   dispatch(remEdit({x:100,y:200}))
            // }, 1000)
            // console.log(getSvgCanvasSys(e))
        },
        onMouseDown: (event) => {
            let e = event || window.event;
            let target = e.target;
            if(!isDrag) {
              let box = target.getBBox();
              startPoints = {
                  boxX: box.x,
                  boxY: box.y,
                  mouseX: parseInt(e.clientX, 10),
                  mouseY: parseInt(e.clientY, 10),
                  target: target
              }
            }
            // 存储当前鼠标已经元素位置信息， 打开可移动标识。
            isDrag = true;

        },
        onMouseMove: (event) => {

            let e = event || window.event;
            if(!isDrag) {
                return false;
            }
            const mp = getSvgCanvasSys(e)
            dispatch(resetEdit(mp))
            dispatch(translateData({...ownProps, mx:e.clientX - startPoints.mouseX, my: e.clientY - startPoints.mouseY}))
        },
        onMouseUp: (event) => {
            let e = event || window.event;
            dispatch(resetData({...ownProps, mx:e.clientX - startPoints.mouseX, my: e.clientY - startPoints.mouseY}))
            isDrag = false;

        }
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);
