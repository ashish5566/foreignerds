import { createStore } from 'redux'
import ItemsReducer from './Item'

const store = createStore(ItemsReducer)

export default store