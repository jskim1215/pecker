import ClockContainer from "components/ClockContainer";
import Profile from "components/Profile";
import Todo from "components/Todo";
import TodoListAssign from "components/TodoListAssign";
import React from "react";

// Todo.js만들어서 다 넣어버리기
const Home = ({ userObj, refreshUser }) => {
  return (
    <>
      <ClockContainer />
      <Profile userObj={userObj} refreshUser={refreshUser} />
      <TodoListAssign userObj={userObj} />
      <Todo userObj={userObj} />
      <div>{/* <Timer userObj={userObj} todoLists={todoLists} /> */}</div>
    </>
  );
};

export default Home;
