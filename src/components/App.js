import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService, dbService } from "fbase";
import "../css/App.css";

function App() {
  const [studyMode, setStudyMode] = useState(null);
  const [timerMode, setTimerMode] = useState(null);
  const [modeObj, setModeObj] = useState(null);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        getcurrentMode(user.uid);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        setModeObj({ studymode: studyMode, timermode: timerMode });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    getcurrentMode(user.uid);
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
    setModeObj({ studymode: studyMode, timermode: timerMode });
  };

  const getcurrentMode = async (uid) => {
    const idCheckLists = [];
    const currentMode = await dbService.collection("usermode").get();
    currentMode.docs.map((doc) => idCheckLists.push(doc.id));
    const identifier = idCheckLists.indexOf(uid);
    if (identifier === -1) {
      await dbService
        .collection("usermode")
        .doc(`${uid}`)
        .set({ uid: uid, studymode: true, timermode: false });
    } else {
      currentMode.docs.map((doc) => {
        if (doc.data().uid === uid) {
          setStudyMode(doc.data().studymode);
          setTimerMode(doc.data().timermode);
        }
      });
    }
    console.log();
  };

  return (
    <>
      <div className="initial-component">
        {init ? (
          <AppRouter
            modeObj={modeObj}
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
            userObj={userObj}
          />
        ) : (
          "Initalizing..."
        )}
      </div>
    </>
  );
}

export default App;
