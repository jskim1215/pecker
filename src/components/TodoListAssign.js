import { dbService } from "fbase";
import React, { useState } from "react";

const TodoListAssign = ({ userObj }) => {
  const [work, setWork] = useState("");
  const [subject, setSubject] = useState("");
  const [format, setFormat] = useState("");
  const [date, setDate] = useState();

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
    setDate();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="work"
        value={work}
        type="text"
        placeholder="Write What ToDo"
        onChange={onChange}
        required
      />
      <input
        name="subject"
        value={subject}
        type="text"
        placeholder="Subject of Todo"
        onChange={onChange}
        required
      />
      <input
        name="format"
        value={format}
        type="text"
        placeholder="Format of Todo"
        onChange={onChange}
        required
      />
      <span>마감일(DueDate) : </span>
      <input name="date" type="date" onChange={onChange} required />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TodoListAssign;
