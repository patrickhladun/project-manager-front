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
              </div>
            </Fragment>
        )
    }
}

export default Tasks;