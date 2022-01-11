import React, { useState } from 'react';
import AddUsers from './components/Users/addUser'
import UsersList from './components/Users/usersList';

function App() {
  const [addUsersList, setUsersList] = useState([]);

  const userListHandler = (uName , uAge, uCollege) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, college: uCollege, id: Math.random().toString()}];
    });
  }
  return (
    <React.Fragment>
      <AddUsers onAddUser={userListHandler} />
      <UsersList users={addUsersList} />
    </React.Fragment>
  );
}

export default App;
