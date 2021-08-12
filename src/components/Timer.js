import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserClock,
  faPlay,
  faPause,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Timer.css";

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
    const confirmAdd = window.confirm("해당 작업에 시간을 추가하시겠습니까?");
    if (addedItem.length === 1 && confirmAdd) {
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
        <div className="timer-title">
          <FontAwesomeIcon icon={faUserClock} />
          &nbsp;&nbsp;Study Timer
        </div>
        <div className="display-time">{displayTimer}</div>
        <div className="timer-btns">
          {!timerOn && (
            <button className="timer-btn left-btn" onClick={onStart}>
              <FontAwesomeIcon icon={faPlay} size="2x" />
            </button>
          )}
          {timerOn && (
            <button className="timer-btn left-btn" onClick={onPause}>
              <FontAwesomeIcon icon={faPause} size="2x" />
            </button>
          )}
          <button className="timer-btn right-btn" onClick={onReset}>
            <FontAwesomeIcon icon={faRedo} size="2x" />
          </button>
        </div>

        {timerOn ? (
          <></>
        ) : (
          <div className="add-timer-container">
            <form onSubmit={onSubmit}>
              <select
                className="timer-select-todolists"
                onChange={onChange}
                name="studyTime"
              >
                <option value="">--Please choose a task--</option>
                {todoLists.map((doc) => (
                  <option key={doc.id} value={doc.createdAt}>
                    {doc.work}
                  </option>
                ))}
              </select>
              <button className="timer-select-btn" onSubmit={onSubmit}>
                시간 추가
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Timer;
