import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
    setNameEdit(false);
  };
  return (
    <div>
      <span>안녕하세요 {userObj.displayName}님</span>

      {nameEdit ? (
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            type="text"
            autoFocus
            placeholder="New Name"
            value={newDisplayName}
          />
          <input
            type="submit"
            value="이름 변경하기"
            style={{
              marginTop: 10,
            }}
          />
        </form>
      ) : (
        <>
          <button onClick={() => setNameEdit(true)}>Update Name</button>
        </>
      )}
      <span onClick={onLogOutClick}>Log Out</span>
    </div>
  );
};

export default Profile;
