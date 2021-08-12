import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faEdit,
  faTrash,
  faBan,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../css/TodoListTable.css";

const TodoListTable = ({ userObj, todoObj }) => {
  const [editing, setEditing] = useState(false);
  const [newWork, setNewWork] = useState(todoObj.work);
  const [newSubject, setNewSubject] = useState(todoObj.subject);
  const [newFormat, setNewFormat] = useState(todoObj.format);
  const [newDate, setNewDate] = useState(todoObj.duedate);

  const [convertTime, setConvertTime] = useState("00:00:00");
  function secondsToHhMmSs(inputTime) {
    let hours = String(Math.floor(inputTime / 3600)).padStart(2, "0");
    let minutes = String(Math.floor((inputTime - 3600 * hours) / 60)).padStart(
      2,
      "0"
    );
    let seconds = String(inputTime - 3600 * hours - 60 * minutes).padStart(
      2,
      "0"
    );
    const HhMmSs = hours + ":" + minutes + ":" + seconds;
    return HhMmSs;
  }

  function deleteYear(inputDateString) {
    let thisDate = inputDateString.split("-");
    let newDate = [thisDate[1], thisDate[2]].join("-");
    return newDate;
  }
  useEffect(() => {
    const convertedTime = secondsToHhMmSs(todoObj.studyTime);
    setConvertTime(convertedTime);
  }, []);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`${userObj.uid}/${todoObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "work") {
      setNewWork(value);
    } else if (name === "subject") {
      setNewSubject(value);
    } else if (name === "format") {
      setNewFormat(value);
    } else if (name === "date") {
      setNewDate(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`${userObj.uid}/${todoObj.id}`).update({
      work: newWork,
      subject: newSubject,
      format: newFormat,
      duedate: newDate,
    });
    setEditing(false);
  };
  return (
    <tbody>
      {editing ? (
        <tr className="todolist-row">
          <td className="todo-edit-task-box">
            <input
              className="todo-edit-task"
              name="work"
              value={newWork}
              type="text"
              placeholder={todoObj.work}
              onChange={onChange}
              required
            />
          </td>
          <td className="todo-edit-category-box">
            <input
              className="todo-edit-category"
              name="subject"
              value={newSubject}
              type="text"
              placeholder={todoObj.subject}
              onChange={onChange}
              required
            />
          </td>
          <td className="todo-edit-format-box">
            <input
              className="todo-edit-format"
              name="format"
              value={newFormat}
              type="text"
              placeholder={todoObj.format}
              onChange={onChange}
              required
            />
          </td>
          <td className="todo-edit-due-box">
            <input
              className="todo-edit-due"
              name="date"
              value={newDate}
              type="date"
              onChange={onChange}
              required
            />
          </td>
          <td className="todo-table-study-column">{convertTime}</td>
          <td>
            <button className="todolist-btn edit-btn" onClick={onSubmit}>
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </button>
          </td>
          <td>
            <button className="todolist-btn cancel-btn" onClick={toggleEditing}>
              <FontAwesomeIcon icon={faBan} size="lg" />
            </button>
          </td>
        </tr>
      ) : (
        <>
          <tr className="todolist-row">
            <td className="todo-table-task-column">{todoObj.work}</td>
            <td className="todo-table-category-column">{todoObj.subject}</td>
            <td className="todo-table-format-column">{todoObj.format}</td>
            <td className="todo-table-due-column">
              {deleteYear(todoObj.duedate)}
            </td>
            <td className="todo-table-study-column">{convertTime}</td>
            <td>
              <button
                className="todolist-btn cancel-btn"
                onClick={onDeleteClick}
              >
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </td>
            <td>
              <button className="todolist-btn edit-btn" onClick={toggleEditing}>
                <FontAwesomeIcon icon={faEdit} size="lg" />
              </button>
            </td>
            <td>
              <button className="todolist-btn edit-btn">
                <FontAwesomeIcon icon={faClipboardCheck} size="lg" />
              </button>
            </td>
          </tr>
        </>
      )}
    </tbody>
  );
};

export default TodoListTable;
