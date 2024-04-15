import React, { useState } from "react";
import Trash2 from "./Trash";
import All from "./All";
import {
  File,
  Trash,
  Grid3X3,
  Rows2,
  FileCheck,
  EllipsisVertical,
} from "lucide-react";
import "./styles/Home.css";
import filler from './images/filler.png'
function Home() {
  const [selected, setSelected] = useState("all");
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
            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>

            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>
            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>
            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>
            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>
            <div className="grid__item">
              <div className="item__top">
                <div className="item__name">
                  <FileCheck />
                  <p>Filename</p>
                </div>
                <EllipsisVertical className="file__option" />
              </div>
              <img className="item__image" src={filler} alt="image"/>
              <div className="item__position__flex">
                <div className="item__avatar">H</div>
                <p>Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
