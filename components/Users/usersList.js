import React from 'react';
import classes from './usersList.module.css';
import Card from '../UI/card'


const UsersList = props => {
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old.) {user.college}
            </li>
          ))}
        </ul>
      </Card>
    );
};


export default UsersList;