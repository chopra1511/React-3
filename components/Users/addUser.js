import React, { useState } from "react";
import classes from "./addUser.module.css";
import Card from "../UI/card";
import Button from "../UI/button";

const AddUser = (props) => {
  const [adduser, setUser] = useState("");
  const [addAge, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(adduser.trim().length === 0 || addAge.trim().length === 0){
      return;
    }
    if(+addAge < 1){
      return;
    }
    console.log(adduser, addAge);
    setUser(" ");
    setAge(" ");
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          value={adduser}
          onChange={userHandler}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={addAge} onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
