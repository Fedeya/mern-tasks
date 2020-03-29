import React, { useReducer } from 'react';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT } from '../../types';

function TaskState(props) {
  const initialState = {
    tasks: [
      {name: 'Select Platform', state: true, projectId: 1},
      {name: 'Select Colors', state: false, projectId: 1},
      {name: 'Select Payment Platform', state: false, projectId: 2},
      {name: 'Select Hosting', state: true, projectId: 3}
    ],
    projectTasks: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = id => {
    dispatch({
      type: TASKS_PROJECT,
      payload: id
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.projectTasks,
        getTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskState;