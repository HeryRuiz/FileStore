import React, { useState } from "react";
import {
  File,
  Trash,
  Grid3X3,
  Rows2,
  FileCheck,
  EllipsisVertical,
  X,
} from "lucide-react";
import "./styles/Home.css";
import filler from "./images/filler.png";
import empty from "./images/empty.png";
import Fake from "./Fake";
function Home() {
  const [selected, setSelected] = useState("all");
  const [isempty, setEmpty] = useState(false);
  const closeUpdate = () => {
    document.querySelector('.upload__modal').style.display = "none"
    document.querySelector('.upload__dark').style.display = "none"
  }
  const openUpdate = () => {
    document.querySelector('.upload__modal').style.display = "block"
    document.querySelector('.upload__dark').style.display = "block"
  }
  
  return (
    <>
      <section id="home">
        <div className="home__container">
          <div className="home__left">
            <div className="home__category" onClick={() => setSelected("all")}>
              <File
                className={
                  "category__name" +
                  (selected === "all" ? " home__selected" : "")
                }
              />
              <p
                className={
                  "category__name" +
                  (selected === "all" ? " home__selected" : "")
                }
              >
                All Files
              </p>
            </div>
            <div
              className="home__category"
              onClick={() => setSelected("trash")}
            >
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
              <button className="home__upload" onClick={openUpdate}>Upload File</button>
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
      <div className="upload__modal">
        <div className="upload__top">
          <p>Upload your file here</p>
          <X onClick={closeUpdate} className="upload__close"/>
        </div>
        <form action="">
          <div className="upload__div">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Title"
              maxLength={8}
              className="form__input upload__input "
            />
          </div>
          <div className="upload__div">
            <label htmlFor="">File</label>
            <input
              type="file"
              placeholder="Title"
              className="form__input upload__input "
            />
          </div>
          <button className="home__upload upload__button">Submit</button>
        </form>
      </div>
      <div className="upload__dark"></div>
    </>
  );
}

export default Home;
