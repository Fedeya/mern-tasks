import React, { useReducer } from 'react';
import * as uuid from 'uuid';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK, DELETE_TASK, STATE_TASK, ACTIVE_TASK, EDIT_TASK, CLEAN_TASK } from '../../types';

function TaskState(props) {
  const initialState = {
    tasks: [
      {id: 1, name: 'Select Platform', state: true, projectId: 1},
      {id: 2, name: 'Select Colors', state: false, projectId: 1},
      {id: 3, name: 'Select Payment Platform', state: false, projectId: 2},
      {id: 4, name: 'Select Hosting', state: true, projectId: 3}
    ],
    projectTasks: null,
    task: null
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

  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  }

  const stateTask = task => {
    dispatch({
      type: STATE_TASK,
      payload: task
    })
  }

  const activeTask = task => {
    dispatch({
      type: ACTIVE_TASK,
      payload: task
    });
  }

  const editTask = name => {
    dispatch({
      type: EDIT_TASK,
      payload: { ...state.task, name }
    });
  }

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK
    });
  } 

  return (
    <TaskContext.Provider
      value={{
        tasks: state.projectTasks,
        task: state.task,
        getTasks,
        addTask,
        deleteTask,
        stateTask,
        activeTask,
        editTask,
        cleanTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskState;