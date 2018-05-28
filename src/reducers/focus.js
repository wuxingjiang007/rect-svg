const focus = (state = '', action) => {
    switch(action.type) {
        case 'SET_FOCUS':
            return [
                ...state,
                Object.assign({},action.data,)
            ];
        case 'CLEAR_FOCUS':
            return [];
        default:
            return [...state]
    }
}

export default focus;
