import { createStore } from 'redux'
import { gradientsList_Reducer as gradientsList } from './reducers/gradients-list/gradientsList_Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, gradientsList)


let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
