import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case LOGS_ERROR:
      return { ...state, error: action.payload };
    case ADD_LOG:
      return { ...state, logs: [...state.logs, action.payload], loading: false };
    case DELETE_LOG:
      return { ...state, logs: state.logs.filter((log) => log.id !== action.payload), loading: false };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case UPDATE_LOG:
      return { ...state, logs: state.logs.map((log) => (log.id === action.payload.id ? action.payload : log)) };
    case SEARCH_LOGS:
      return { ...state, logs: action.payload };
  }
};
