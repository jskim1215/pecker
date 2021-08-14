import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoListTable from "./TodoListTable";
import "../css/Todo.css";

const Todo = ({ todoLists, userObj }) => {
  const [filterTarget, setFilterTarget] = useState("");
  const [sortTodo, setSortTodo] = useState(todoLists);

  useEffect(() => {
    if (filterTarget !== "") {
      const filteredTodoLists = todoLists.filter(
        (todoList) => todoList.subject === filterTarget
      );
      setSortTodo(filteredTodoLists);
    } else {
      dbService
        .collection(`${userObj.uid}`)
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const todoArray_a = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSortTodo(todoArray_a);
        });
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
  const subjectArray = todoLists.map((todo) => {
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
        <h1 className="todo-title">Todo List</h1>
        <div className="todo-filter-div">
          <button className="todo-filter-btn" onClick={unfilter}>
            전체
          </button>
          {filterArray.map((doc) => (
            <button className="todo-filter-btn" onClick={onClick} key={doc.id}>
              {doc.subject}
            </button>
          ))}
        </div>
        <div className="todolists-table-container">
          <table className="todolist-table">
            <thead className="todolist-thead fixedHeader">
              <tr>
                <th className="todolist-task-column">할 일</th>
                <th className="todolist-category-column">카테고리</th>
                <th className="todolist-format-column">형식</th>
                <th className="todolist-due-column">마감일</th>
                <th className="todolist-studytime-column">소요 시간</th>
                <th colSpan="3" className="todolist-button-column">
                  Buttons
                </th>
              </tr>
            </thead>
            <tbody>
              {sortTodo.map((todoList) => (
                <TodoListTable
                  userObj={userObj}
                  key={todoList.id}
                  todoObj={todoList}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todo;
