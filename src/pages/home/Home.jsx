import React, { useState } from "react";
import {
  File,
  Trash,
  Grid3X3,
  Rows2,
  FileCheck,
  EllipsisVertical,
} from "lucide-react";
import "./styles/Home.css";
import filler from "./images/filler.png";
import empty from "./images/empty.png";
import Fake from "./Fake";
function Home() {
  const [selected, setSelected] = useState("all");
  const [isempty, setEmpty] = useState(false);
  return (
    <section id="home">
      <div className="home__container">
        <div className="home__left">
          <div className="home__category" onClick={() => setSelected("all")}>
            <File
              className={
                "category__name" + (selected === "all" ? " home__selected" : "")
              }
            />
            <p
              className={
                "category__name" + (selected === "all" ? " home__selected" : "")
              }
            >
              All Files
            </p>
          </div>
          <div className="home__category" onClick={() => setSelected("trash")}>
            <Trash
              className={
                "category__name" +
                (selected === "trash" ? " home__selected" : "")
              }
            />
            <p
              className={
                "category__name" +
                (selected === "trash" ? " home__selected" : "")
              }
            >
              Trash
            </p>
          </div>
        </div>
        <div className="home__right">
          <div className="home__top">
            <p className="home__title">
              {selected === "all" ? "All Files" : "Trash"}
            </p>
            <button className="home__upload">Upload File</button>
          </div>
          <div className="home__layout">
            <div className="layout__option">
              <Grid3X3 />
              <p>Grid</p>
            </div>
            <div className="layout__option2">
              <Rows2 />
              <p>Table</p>
            </div>
          </div>
          <div className="home__grid">
              <Fake />
              <Fake />
              <Fake />
              <Fake />
              <Fake />
              <Fake />
              <Fake />
              <Fake />
          </div>
          {isempty ? (
            <>
              <img src={empty} alt="No Files" className="home__empty" />
              <p></p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
