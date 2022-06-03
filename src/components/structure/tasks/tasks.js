import React, { Fragment } from 'react';
import ListTasks from '../../task/listTasks';
class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
              <div className="app-tasks-main">
                <span>Tasks</span>
                <ListTasks />            
                <button>Add Task</button>
              </div>
            </Fragment>
        )
    }
}

export default Tasks;