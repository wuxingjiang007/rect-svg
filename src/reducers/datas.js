const datas = (state = '', action) => {
    switch(action.type) {
        case 'INSERT_DATA':
            console.log(action.data)
            return [
                ...state,
                Object.assign({},action.data, {
                    id: action.id
                })
            ];
        default:
            return [...state]
    }
}

export default datas;