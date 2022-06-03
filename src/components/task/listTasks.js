import React from 'react';

class ListTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/tasks/', {
      crossDomain: true,
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
      .then(data => data.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if(error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app-tasks-list">
          {
            items.map(item => (
              <div className="app-task-item" key={item._id}>
                {item.title} {item._id}
              </div>
            ))
          }
        </div>
      );
    }
  }
}

export default ListTasks;