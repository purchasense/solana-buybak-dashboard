import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import qrcodeReducer from './modalQRCodeReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  qrcode: qrcodeReducer,
});

export default reducer;
