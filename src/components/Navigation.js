import React, { useState } from "react";

const Navigation = ({ userObj }) => {
  const [sMode, setSMode] = useState(userObj.studymode);
  return (
    <>
      {sMode ? (
        <button onClick={() => setSMode(false)}>Surf Mode</button>
      ) : (
        <button onClick={() => setSMode(true)}>Study Mode</button>
      )}

      <button>Portfolio</button>
    </>
  );
};

export default Navigation;
