const datas = (state = [], action) => {
    let focus = action.focus;

    switch(action.type) {
        case 'INSERT_DATA':
            console.log(action.data)
            return [
                ...state,
                Object.assign({},action.data, {
                    id: action.id
                })
            ];
        case 'TRANSLATE_DATA':
            if(Object.prototype.toString.call(focus) === '[object Array]' && focus.length >0) {
                let obj = state.map(a => {
                    focus.map(b => {
                        if(a.id === b.id) {
                            a.transform = `translate(${parseInt(action.mx)},${parseInt(action.my)})`;
                        }
                    })
                    return a
                })
                return obj
            }else {
                return [...state]
            }
        case 'RESET_DATA':
            if(Object.prototype.toString.call(focus) === '[object Array]' && focus.length >0) {
                let obj = state.map(a => {
                    focus.map(b => {
                        if(a.id === b.id) {
                            switch (a.mold) {
                                case 'CIRCLE':
                                    console.log('放手')
                                    a.cx = a.cx + parseInt(action.mx);
                                    a.cy = a.cy + parseInt(action.my);
                                    a.transform = `translate(0,0)`;
                                    break;
                                default:
                                    break;
                            }
                        }
                    })
                    return a
                })
                return obj
            }
            break;
        default:
            return state
    }
}

export default datas;
