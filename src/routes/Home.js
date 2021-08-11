import ClockContainer from "components/ClockContainer";
import Profile from "components/Profile";
import Todo from "components/Todo";
import TodoListAssign from "components/TodoListAssign";
import React, { useEffect, useState } from "react";
import Timer from "components/Timer";
import { dbService } from "fbase";

// Todo.js만들어서 다 넣어버리기
const Home = ({ userObj, refreshUser }) => {
  const [todoLists, setTodoLists] = useState([]);
  useEffect(() => {
    dbService
      .collection(`${userObj.uid}`)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const todoArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodoLists(todoArray);
      });
  }, []);
  return (
    <>
      <ClockContainer />
      <Profile userObj={userObj} refreshUser={refreshUser} />
      <TodoListAssign userObj={userObj} />
      <Todo userObj={userObj} todoLists={todoLists} />
      <div>
        <Timer userObj={userObj} todoLists={todoLists} />
      </div>
    </>
  );
};

export default Home;
