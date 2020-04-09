import React, { useReducer } from 'react';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK, DELETE_TASK, STATE_TASK, ACTIVE_TASK, EDIT_TASK, CLEAN_TASK } from '../../types';

import axiosClient from '../../config/axios';

function TaskState(props) {
  const initialState = {
    tasks: [],
    task: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = async id => {
    try {
      const res = await axiosClient.get(`/tasks`, { params: { project: id } });
      dispatch({
        type: TASKS_PROJECT,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  const addTask = async (projectId, name) => {
    try {

      const res = await axiosClient.post('/tasks', { name, project: projectId });

      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  const deleteTask = async (id, project) => {
    console.log(id, project);
    try {
      await axiosClient.delete(`/tasks/${id}`, { params: { project } });
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    } catch(err) {
      console.log(err.response);
    }
  }

  const stateTask = async task => {
    try {
      const res = await axiosClient.put(`/tasks/${task._id}`, task);
      dispatch({
        type: STATE_TASK,
        payload: res.data
      })
    } catch(err) {
      console.log(err.response);
    }
  }

  const activeTask = task => {
    dispatch({
      type: ACTIVE_TASK,
      payload: task
    });
  }

  const editTask = async (name, project) => {
    try {
      const res = await axiosClient.put(`/tasks/${state.task._id}`, { name, project });
      dispatch({
        type: EDIT_TASK,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK
    });
  } 

  return (
    <TaskContext.Provider
      value={{
        ...state,
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