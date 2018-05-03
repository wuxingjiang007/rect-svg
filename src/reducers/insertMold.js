const setInsertMold = (state = '', action) => {
    switch(action.type) {
        case 'SET_INSERT_MOLD':
            return action.mold
        default:
            return state
    }
}

export default setInsertMold;