import React from 'react';

const UserItem = (props) => {
  return (
    <tr>
      <td>{props.data.first}</td>
      <td>{props.data.last}</td>
      <td>{props.data.email}</td>
    </tr>
  )
}

export default UserItem;