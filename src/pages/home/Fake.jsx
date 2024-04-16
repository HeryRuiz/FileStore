import React from "react";
import { FileWarning, EllipsisVertical, Trash, CircleX  } from "lucide-react";
import avatar from "./images/avatar.png";
function Fake() {
  return (
    <>
      <div className="grid__item">
        <div className="item__top">
          <div className="item__name">
            <FileWarning />
            <p>Empty Slot</p>
          </div>
          <EllipsisVertical className="file__option" />
          <div className="file__dropdown">
            <Trash />
            <p>Delete</p>
          </div>
        </div>
        <div className="item__image">
        <CircleX className="file__icon" size={60} />
        </div>
        <div className="item__position__flex">
          <img src={avatar} alt="avatar" />
          <p>You</p>
        </div>
      </div>
    </>
  );
}

export default Fake;
