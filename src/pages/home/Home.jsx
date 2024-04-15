import React, { useState } from "react";
import Trash2 from "./Trash";
import All from "./All";
import { File, Trash, Grid3X3, Rows2 } from "lucide-react";
import "./styles/Home.css";
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
              {selected === "all" ? "All Files" : "Deleted Files"}
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
        </div>
      </div>
    </section>
  );
}

export default Home;
