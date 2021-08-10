import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Timer = ({ userObj, todoLists }) => {
  const [displayTimer, setDisplayTimer] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [startTime, setstartTime] = useState(0);
  const [selectedTodo, setSelectedTodo] = useState("");

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
  function HhMmSstoSeconds(timeData) {
    let timeArray = timeData.split(":");
    const hh = parseInt(timeArray[0]);
    const mm = parseInt(timeArray[1]);
    const ss = parseInt(timeArray[2]);
    let usageTime_toSeconds = 0;
    usageTime_toSeconds = hh * 3600 + mm * 60 + ss;
    return usageTime_toSeconds;
  }
  useEffect(() => {
    let interval;
    if (timerOn) {
      if (endTime === 0) {
        const firstStart = Date.now();
        setstartTime(firstStart);
        interval = setInterval(() => {
          const nowTime = Date.now();
          const nowTimeSeconds = Math.floor((nowTime - firstStart) / 1000);
          setDisplayTimer(secondsToHhMmSs(nowTimeSeconds));
        }, 1000);
      } else {
        const restartTime = startTime - endTime + Date.now();
        setstartTime(restartTime);
        interval = setInterval(() => {
          const reNowTime = Date.now();
          const reNowTimeSeconds = Math.floor((reNowTime - restartTime) / 1000);
          setDisplayTimer(secondsToHhMmSs(reNowTimeSeconds));
        }, 1000);
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const onStart = () => {
    setTimerOn(true);
  };
  const onPause = () => {
    const pauseTime = Date.now();
    setEndTime(pauseTime);
    setTimerOn(false);
  };
  const onReset = () => {
    setTimerOn(false);
    setDisplayTimer("00:00:00");
    setEndTime(0);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const addedItem = todoLists.filter(
      (todoList) => todoList.createdAt === parseInt(selectedTodo)
    );
    if (addedItem.length === 1) {
      const beforeAddedItem = await dbService
        .doc(`${userObj.uid}/${addedItem[0].id}`)
        .get();
      const beforeTime = beforeAddedItem.data().studyTime;
      const addedTime = HhMmSstoSeconds(displayTimer);
      const totalTime = beforeTime + addedTime;
      await dbService
        .doc(`${userObj.uid}/${addedItem[0].id}`)
        .update({ studyTime: totalTime });
      setDisplayTimer("00:00:00");
      setEndTime(0);
    } else {
      return;
    }
  };
  const onChange = async (event) => {
    const selectedSubject = event.target.value;
    await setSelectedTodo(selectedSubject);
  };
  return (
    <>
      <div>
        <h1>This is For Timer</h1>
        <h2>{displayTimer}</h2>
        {!timerOn && <button onClick={onStart}>Start</button>}
        {timerOn && <button onClick={onPause}>Pause</button>}
        <button onClick={onReset}>Reset</button>
      </div>
      {timerOn ? (
        <></>
      ) : (
        <form onSubmit={onSubmit}>
          <select onChange={onChange} name="studyTime">
            <option value="">--Please choose an subject--</option>
            {todoLists.map((doc) => (
              <option key={doc.id} value={doc.createdAt}>
                {doc.work}
              </option>
            ))}
          </select>
          <input type="submit" value="Add Time" />
        </form>
      )}
    </>
  );
};

export default Timer;
