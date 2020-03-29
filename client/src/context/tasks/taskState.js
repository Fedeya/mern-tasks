import React, { useReducer } from 'react';
import * as uuid from 'uuid';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK } from '../../types';

function TaskState(props) {
  const initialState = {
    tasks: [
      {id: 1, name: 'Select Platform', state: true, projectId: 1},
      {id: 2, name: 'Select Colors', state: false, projectId: 1},
      {id: 3, name: 'Select Payment Platform', state: false, projectId: 2},
      {id: 4, name: 'Select Hosting', state: true, projectId: 3}
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

  const addTask = (projectId, name) => {
    dispatch({
      type: ADD_TASK,
      payload: { id: uuid.v4(), state: false, name, projectId }
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.projectTasks,
        getTasks,
        addTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskState;