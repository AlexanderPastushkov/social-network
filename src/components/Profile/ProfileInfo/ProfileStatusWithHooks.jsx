import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]); //эффект сработает только при изменении props.status
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.status}>
      {
        !editMode && (
          <div>
            <span onDoubleClick={activateEditMode}>{props.status}</span>
          </div>
        ) //onDoubleClick we change span on input
      }
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
            //набирая статус мы меняем локальный стейт, глобальный пока остается

            //по клику мимо инпута мы апдейтим статус путем запроса put на сервер и меняем глобальный стейт и в спане меняется статус
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
