import { TASKS_PROJECT, ADD_TASK, DELETE_TASK, STATE_TASK, ACTIVE_TASK, EDIT_TASK, CLEAN_TASK } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload),
      }
    case EDIT_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task ),
      }
    case ACTIVE_TASK:
      return {
        ...state,
        task: action.payload
      }
    case CLEAN_TASK:
      return {
        ...state,
        task: null
      }
    default:
      return state;
  }
}