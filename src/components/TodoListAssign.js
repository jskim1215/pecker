import { dbService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import "../css/TodoListAssign.css";

const TodoListAssign = ({ userObj }) => {
  const [work, setWork] = useState("");
  const [subject, setSubject] = useState("");
  const [format, setFormat] = useState("");
  const [date, setDate] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "work") {
      setWork(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "format") {
      setFormat(value);
    } else if (name === "date") {
      setDate(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const newTodoListObj = {
      work: work,
      subject: subject,
      format: format,
      duedate: date,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      studyTime: 0,
    };
    await dbService.collection(`${userObj.uid}`).add(newTodoListObj);
    setWork("");
    setSubject("");
    setFormat("");
  };
  return (
    <form className="todo-form-container" onSubmit={onSubmit}>
      <table className="todo-assign-table">
        <tbody>
          <tr className="todo-assign-row">
            <td className="todo-assign-column">Task</td>
            <td>
              <input
                className="todo-assign-input"
                name="work"
                value={work}
                type="text"
                placeholder="Task"
                onChange={onChange}
                required
              />
            </td>
          </tr>
          <tr className="todo-assign-row">
            <td className="todo-assign-column">Category</td>
            <td>
              <input
                className="todo-assign-input"
                name="subject"
                value={subject}
                type="text"
                placeholder="Category"
                onChange={onChange}
                required
              />
            </td>
          </tr>
          <tr className="todo-assign-row">
            <td className="todo-assign-column">Format</td>
            <td>
              <input
                className="todo-assign-input"
                name="format"
                value={format}
                type="text"
                placeholder="Format"
                onChange={onChange}
                required
              />
            </td>
          </tr>
          <tr className="todo-assign-row">
            <td className="todo-assign-column">DueDate</td>
            <td>
              <input
                className="todo-assign-input"
                name="date"
                type="date"
                onChange={onChange}
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="todo-assign-submit-btn" onSubmit={onSubmit}>
        <FontAwesomeIcon icon={faPlusSquare} /> 추가하기
      </button>
    </form>
  );
};

export default TodoListAssign;
