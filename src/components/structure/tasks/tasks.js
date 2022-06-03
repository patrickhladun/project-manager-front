import React, { Fragment } from 'react';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
              <div className="app-tasks-main">
                <span>Tasks</span>
                
                <div className="app-tasks-list">
                  <div className="app-task-item">Task number 1</div>
                  <div className="app-task-item">Task number 2</div>
                  <div className="app-task-item">Task number 3</div>
                </div>

                <button>Add Task</button>
                
              </div>
            </Fragment>
        )
    }
}

export default Tasks;