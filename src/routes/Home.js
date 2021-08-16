import Profile from "components/Profile";
import Todo from "components/Todo";
import TodoListAssign from "components/TodoListAssign";
import React, { useEffect, useState } from "react";
import Timer from "components/Timer";
import { dbService } from "fbase";
import "../css/Home.css";
import SelfAd from "components/SelfAd";

// Todo.js만들어서 다 넣어버리기
const Home = ({ blog, userObj, refreshUser }) => {
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
      <div className="home-container">
        <div className="first-inner-container">
          <div className="first-box-container box-container">
            <Profile
              className="home-profile"
              userObj={userObj}
              refreshUser={refreshUser}
            />
            <TodoListAssign className="home-todo-assign" userObj={userObj} />
          </div>
          <div className="second-box-container box-container">
            <Timer userObj={userObj} todoLists={todoLists} />
          </div>
        </div>
        <div className="second-inner-container">
          <div className="third-box-container box-container">
            <Todo userObj={userObj} todoLists={todoLists} />
          </div>
          <div className="fourth-box-container box-container">
            <SelfAd blog={blog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
