import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Task from './Task';

import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

function TaskList() {

  const { project, deleteProject } = useContext(projectContext);
  const { tasks } = useContext(TaskContext);

  if (!project) return <h2>Select a project!</h2>;

  return (
    <Fragment>
      <h2>Project: {project.name}</h2>
      <ul className="list-tasks">
        {
          tasks &&
            tasks.length > 0 ?
            <TransitionGroup>
              {
                tasks.map(task => (
                  <CSSTransition 
                    key={task._id}
                    timeout={200}
                    classNames="task"
                  >
                    <Task task={task} />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
            : (<li className="task"><p>There is not tasks</p></li>)
        }
      </ul>
      <button
        className="btn btn-delete"
        onClick={() => deleteProject(project._id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
}

export default TaskList;