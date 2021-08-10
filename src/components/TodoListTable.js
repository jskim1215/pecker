import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const TodoListTable = ({ userObj, todoObj }) => {
  const [editing, setEditing] = useState(false);
  const [newWork, setNewWork] = useState(todoObj.work);
  const [newSubject, setNewSubject] = useState(todoObj.subject);
  const [newFormat, setNewFormat] = useState(todoObj.format);

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
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService
      .doc(`${userObj.uid}/${todoObj.id}`)
      .update({ work: newWork, subject: newSubject, format: newFormat });
    setEditing(false);
  };
  return (
    <tbody>
      {editing ? (
        <tr>
          <td>
            <input
              name="work"
              value={newWork}
              type="text"
              placeholder={todoObj.work}
              onChange={onChange}
              required
            />
          </td>
          <td>
            <input
              name="subject"
              value={newSubject}
              type="text"
              placeholder={todoObj.subject}
              onChange={onChange}
              required
            />
          </td>
          <td>
            <input
              name="format"
              value={newFormat}
              type="text"
              placeholder={todoObj.format}
              onChange={onChange}
              required
            />
          </td>
          <td>{convertTime}</td>
          <td>
            <button onClick={onSubmit}>Update</button>
          </td>
          <td>
            <button onClick={toggleEditing}>Cancel</button>
          </td>
        </tr>
      ) : (
        <>
          <tr>
            <td>{todoObj.work}</td>
            <td>{todoObj.subject}</td>
            <td>{todoObj.format}</td>
            <td>{convertTime}</td>
            <td>
              <button onClick={onDeleteClick}>Delete</button>
            </td>
            <td>
              <button onClick={toggleEditing}>Edit</button>
            </td>
            <td>
              <button>Complete</button>
            </td>
          </tr>
        </>
      )}
    </tbody>
  );
};

export default TodoListTable;
