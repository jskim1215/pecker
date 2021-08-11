import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoListTable from "./TodoListTable";
import Timer from "components/Timer";

const Todo = ({ userObj }) => {
  const [filterTarget, setFilterTarget] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [todoListMenu, setTodoListMenu] = useState([]);

  useEffect(() => {
    if (filterTarget === "") {
      dbService
        .collection(`${userObj.uid}`)
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const todoArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTodoListMenu(todoArray);
          setTodoLists(todoArray);
        });
    } else {
      const filteredTodoLists = todoListMenu.filter(
        (todoList) => todoList.subject === filterTarget
      );
      setTodoLists(filteredTodoLists);
    }
  }, [filterTarget]);

  let baseArray = [];
  let filterArray = [];

  const onClick = (event) => {
    const clickedFilter = event.target.innerText;
    setFilterTarget(clickedFilter);
  };
  const unfilter = (event) => {
    setFilterTarget("");
  };
  const subjectArray = todoListMenu.map((todo) => {
    baseArray.push(todo.subject);
  });
  const targetSubject = [...new Set(baseArray)];
  const filtering = targetSubject.map((doc) => {
    const filterObj = {
      id: uuidv4(),
      subject: doc,
    };
    filterArray.push(filterObj);
  });
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <button onClick={unfilter}>전체</button>
        {filterArray.map((doc) => (
          <button onClick={onClick} key={doc.id}>
            {doc.subject}
          </button>
        ))}
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Subject</th>
              <th>Format</th>
              <th>D-Day</th>
              <th>Study Time</th>
            </tr>
          </thead>
          <>
            {todoLists.map((todoList) => (
              <TodoListTable
                userObj={userObj}
                key={todoList.id}
                todoObj={todoList}
              />
            ))}
          </>
        </table>
      </div>
    </>
  );
};

export default Todo;
