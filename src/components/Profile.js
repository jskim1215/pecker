import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "../css/Profile.css";

const Profile = ({ refreshUser, userObj }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    const okLogOut = window.confirm("로그아웃하시겠습니까?");
    if (okLogOut) {
      authService.signOut();
      history.push("/");
    } else {
      return;
    }
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
    <div className="profile-container">
      <div className="greeting">안녕하세요 {userObj.displayName}님</div>

      <div className="edit-profile">
        {nameEdit ? (
          <form onSubmit={onSubmit}>
            <input
              className="edit-finish-btn"
              onChange={onChange}
              type="text"
              autoFocus
              placeholder="New Name"
              value={newDisplayName}
            />
            <input
              className="edit-finish-btn"
              type="submit"
              value="이름 변경하기"
            />
          </form>
        ) : (
          <>
            <button
              className="profile-edit-btn"
              onClick={() => setNameEdit(true)}
            >
              <FontAwesomeIcon icon={faUserEdit} />
              &nbsp; 이름 수정
            </button>
          </>
        )}
      </div>
      <div className="logout-container">
        <button className="logout-btn" onClick={onLogOutClick}>
          <FontAwesomeIcon icon={faPowerOff} />
          &nbsp; 로그아웃
        </button>
      </div>
    </div>
  );
};

export default Profile;
