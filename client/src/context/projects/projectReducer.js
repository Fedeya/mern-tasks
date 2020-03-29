import { OPEN_FORM } from '../../types';

export default (state, action) => {
  switch(action.type) {
    case OPEN_FORM: 
      return {
        ...state,
        openForm: !state.openForm
      }
    default:
      return state;
  }
}