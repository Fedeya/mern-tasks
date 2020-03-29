import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { OPEN_FORM } from '../../types';

function ProjectState(props) {
  const initialState = {
    openForm: false,
    projects: [
      { id: 1, name: 'Tienda Virtual' }, 
      { id: 2, name: 'Web Design' }, 
      { id: 3, name: 'Mobile App' }
    ]
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: OPEN_FORM
    });
  }

  return (
    <projectContext.Provider
      value={{
        openForm: state.openForm,
        projects: state.projects,
        showForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectState;