import { combineReducers } from 'redux'
import datas from './datas';
import insertMold from './insertMold'
import edit from './edit'

export default combineReducers({
    datas,
    insertMold,
    edit
})
