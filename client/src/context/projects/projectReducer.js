import { OPEN_FORM, GET_PROJECTS } from '../../types';

export default (state, action) => {
  switch(action.type) {
    case OPEN_FORM: 
      return {
        ...state,
        openForm: !state.openForm
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      } 
    default:
      return state;
  }
}