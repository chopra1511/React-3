import React, { useState } from "react";
import classes from "./addUser.module.css";
import Card from "../UI/card";
import Button from "../UI/button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [adduser, setUser] = useState("");
  const [addAge, setAge] = useState("");
  const [addCollege, setCollege] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (adduser.trim().length === 0 || addAge.trim().length === 0 || addCollege.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username, age and College name (non-empty values)"
      })
      return;
    }
    if (+addAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    }
    props.onAddUser(adduser, addAge, addCollege);
    setUser(" ");
    setAge(" ");
    setCollege(" ");
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const collegeHandler = (event) => {
    setCollege(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          <label htmlFor="age">College Name</label>
          <input id="college" type="text" value={addCollege} onChange={collegeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
