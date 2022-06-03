import React, { Fragment } from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
              <div className="app-sidebar">
                <span>Sidebar</span>
              </div>
            </Fragment>
        )
    }
}

export default Sidebar;