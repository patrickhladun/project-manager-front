import React, { Fragment } from 'react';
import Header from '../../components/structure/header/header';
import Sidebar from '../../components/structure/sidebar/sidebar';
import Tasks from '../../components/structure/tasks/tasks';

const Dashboard = () => {
    return(
        <Fragment>
            <Header />
            <div className="app-main">
                <Sidebar />
                <Tasks />
            </div>
        </Fragment>
    )
}

export default Dashboard;