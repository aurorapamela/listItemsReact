import React from 'react';
import UserItem from './UserItem';
import axios from 'axios';

class UsersList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios
      .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
      .then(res => {
        const users = res.data;
        this.setState({
          users: users
        })
      })
  }

  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="users-tbody">
          {this.state.users.map(u => <UserItem data={u} key={u.id} />)}
        </tbody>
      </table>
    )
  }
}

export default UsersList;