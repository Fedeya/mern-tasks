import React, { useReducer } from 'react';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

function TaskState(props) {
  const initialState = {
    tasks: [
      {name: 'Select Platform', state: true, projectId: 1},
      {name: 'Select Colors', state: false, projectId: 1},
      {name: 'Select Payment Platform', state: false, projectId: 2},
      {name: 'Select Hosting', state: true, projectId: 3}
    ]
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskState;