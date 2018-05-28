

const getEdit = (source) => {
    let editData = {
        id: 'edit' + source.id,
        className: 'editRect',
        mold: 'RECT',
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        style: {
            'fillOpacity': '0.5',
            'stroke': 'rgb(79, 128, 255)',
            'fill': '#000',
            fillOpacity: 0,
            'strokeWidth': 2,
            'strokeDasharray': '3 2',
            translate: 'none'
        }
    }

    let strokeWidth = source.style.strokeWidth || 0;

    switch (source.mold) {

        case 'RECT':
            return (Object.assign(editData, {
                x: source.x - strokeWidth * 2,
                y: source.y - strokeWidth * 2,
                width: source.width + strokeWidth * 4,
                height: source.height + strokeWidth * 4,
                source: source
            }))
        case 'CIRCLE':
            return (Object.assign(editData, {
                x: source.cx - source.r -  strokeWidth * 2,
                y: source.cy - source.r -  strokeWidth * 2,
                width: 2 * source.r + strokeWidth * 4,
                height: 2 * source.r + strokeWidth * 4,
                source: source
            }))
        default:
            return '';
    }

}

const edit = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_EDIT':
            return getEdit(action);
        case 'RESET_EDIT':
            return Object.assign({}, state,  action)
        default:
            return state;
    }
}

export default edit;
