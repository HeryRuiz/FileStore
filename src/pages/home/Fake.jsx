import React from "react";
import { FileWarning, EllipsisVertical, Trash, Info } from "lucide-react";

function Fake() {
  return (
    <>
      <div className="grid__item">
        <div className="item__top">
          <div className="item__name">
            <Info />
            <p>Empty Slot</p>
          </div>
          <EllipsisVertical className="file__option" />
          <div className="file__dropdown">
            <Trash />
            <p>Delete</p>
          </div>
        </div>
        <div className="item__image">
          <FileWarning className="file__icon" size={60} />
        </div>
        <div className="item__position__flex">
        <div className="item__avatar">{'Y'}</div>
          <p>You</p>
        </div>
      </div>
    </>
  );
}

export default Fake;
