import { combineReducers } from 'redux';
import { addProduct } from '../actions/productActions';
import { productReducer, selectedProductReducer} from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;