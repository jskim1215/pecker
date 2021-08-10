import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService, dbService } from "fbase";

function App() {
  const [studyMode, setStudyMode] = useState(null);
  const [timerMode, setTimerMode] = useState(null);
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
          studymode: studyMode,
          timermode: timerMode,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
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
  };

  const pageMode = () => {};

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initalizing..."
      )}
    </>
  );
}

export default App;
