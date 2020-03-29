import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { OPEN_FORM, GET_PROJECTS } from '../../types';

function ProjectState(props) {
  const initialState = {
    openForm: false,
    projects: []
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: OPEN_FORM
    });
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: [
        { id: 1, name: 'Tienda Virtual' }, 
        { id: 2, name: 'Web Design' }, 
        { id: 3, name: 'Mobile App' }
      ]
    });
  }

  return (
    <projectContext.Provider
      value={{
        openForm: state.openForm,
        projects: state.projects,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectState;