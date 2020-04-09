import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { OPEN_FORM, GET_PROJECTS, ADD_PROJECT, ACTIVE_PROJECT, DELETE_PROJECT } from '../../types';

import axiosClient from '../../config/axios';

function ProjectState(props) {
  const initialState = {
    openForm: false,
    projects: [],
    project: null
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: OPEN_FORM
    });
  }

  const getProjects = async () => {
    try {
      const res = await axiosClient.get('/projects');
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    } catch(err) {
      console.log(err);
    }
  }

  const addProject = async name => {
    try {

      const res = await axiosClient.post('/projects', { name });
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  const activeProject = project => {
    dispatch({
      type: ACTIVE_PROJECT,
      payload: project
    });
  }

  const deleteProject = async id => {
    try {
      await axiosClient.delete(`/projects/${id}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  return (
    <projectContext.Provider
      value={{
        openForm: state.openForm,
        projects: state.projects,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        activeProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectState;