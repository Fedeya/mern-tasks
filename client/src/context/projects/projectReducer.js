import { OPEN_FORM, GET_PROJECTS, ADD_PROJECT, ACTIVE_PROJECT, DELETE_PROJECT } from '../../types';

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
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        openForm: false
      }
    case ACTIVE_PROJECT:
      return {
        ...state,
        project: action.payload
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        project: null
      }
    default:
      return state;
  }
}