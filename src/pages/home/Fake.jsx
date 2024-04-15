import React from "react";
import {
  File,
  Trash,
  Grid3X3,
  Rows2,
  FileWarning,
  EllipsisVertical,
} from "lucide-react";
import filler from "./images/filler.png";
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
        </div>
        <img className="item__image" src={filler} alt="image" />
        <div className="item__position__flex">
          <img src={avatar} alt="avatar" />
          <p>You</p>
        </div>
      </div>
    </>
  );
}

export default Fake;
