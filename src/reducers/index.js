import stepCounterReducer from './stepCounterReducer';
import extColorReducer from './extColorReducer';
import wheelsReducer from './wheelsReducer';
import showInteriorReducer from './showInteriorReducer';
import interiorColorReducer from './interiorColorReducer';
import trimColorReducer from './trimColorReducer';
import carIdReducer from './carIdReducer';
import carModelReducer from './carModelReducer';
import enginePriceReducer from './enginePriceReducer';
import modelPriceReducer from './modelPriceReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    stepCounterReducer,
    extColorReducer,
    wheelsReducer,
    showInteriorReducer,
    interiorColorReducer,
    trimColorReducer,
    carIdReducer,
    carModelReducer,
    enginePriceReducer,
    modelPriceReducer
});

export default allReducers;