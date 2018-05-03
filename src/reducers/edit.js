

const getEdit = (source) => {
    console.log(source);
    let editData = {
        id: source.id,
        mold: 'RECT',
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        style: {
            'fillOpacity': '0.5',
            'stroke': 'black',
            'fill': 'none',
            'strokeWidth': 2,
            'strokeDasharray': '3 2'
        }
    }
    switch (source.mold) {
        
        case 'RECT':
            return (Object.assign(editData, {
                x: source.x - 2,
                y: source.y - 2,
                width: source.width + 4,
                height: source.height + 4,
            }))
        case 'CIRCLE':
            return (Object.assign(editData, {
                x: source.cx - source.r - 2,
                y: source.cy - source.r - 2,
                width: 2 * source.r + 4,
                height: 2 * source.r + 4,
            }))
        default:
            return '';
    }
    
}

const edit = (state = '', action) => {
    switch (action.type) {
        case 'CREATE_EDIT':
            return getEdit(action.data);
    
        default:
            return state;
    }
}

export default edit;