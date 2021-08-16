import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService, dbService, storageSerive } from "fbase";
import "../css/App.css";

function App() {
  const [blog, setBlog] = useState(null);
  const [studyMode, setStudyMode] = useState(null);
  const [timerMode, setTimerMode] = useState(null);
  const [modeObj, setModeObj] = useState(null);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        getcurrentMode(user.uid);
        getBlogData();
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
  };

  const getBlogData = async () => {
    const storageData = (await storageSerive.ref().child("blog").list()).items;
    const blogArray = storageData.map((each) => {
      const savedName = each.name.split(".")[0];
      return savedName;
    });
    const chosenBlog = blogArray[Math.floor(Math.random() * blogArray.length)];
    const blogURL = await storageSerive
      .ref()
      .child(`blog/${chosenBlog}.png`)
      .getDownloadURL();
    const blogObj = { name: chosenBlog, URL: blogURL };
    if (!blogObj) {
      return;
    } else {
      setBlog(blogObj);
    }
  };
  return (
    <>
      <div className="initial-component">
        {init ? (
          <AppRouter
            blog={blog}
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
