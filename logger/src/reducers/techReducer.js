import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from '../actions/types';

const initailState = {
  techs: null,
  loading: false,
  error: null
};

//eslint-disable-next-line
export default (state = initailState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case ADD_TECH:
      return { ...state, techs: [...state.techs, action.payload], loading: false };
    case TECHS_ERROR:
      return { ...state, error: action.paylaod, loading: false };
    case DELETE_TECH:
      return { ...state, techs: state.techs.filter((tech) => tech.id !== action.payload), loading: false };
  }
};
