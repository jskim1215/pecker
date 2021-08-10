import React, { useState, useEffect } from "react";

const ClockContainer = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>현재시간</h1>
      <h2>{dateTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockContainer;
