import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

function projectState(props) {
  const initialState = {
    openForm: false
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <projectContext.Provider
      value={{
        openForm: state.openForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}