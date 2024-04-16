import React, { useState } from "react";
import { File, Trash, Grid3X3, Rows2, EllipsisVertical, X } from "lucide-react";
import "./styles/Home.css";
import Fake from "./Fake";
import avatar from "./images/avatar.png";

function Home() {
  const [selected, setSelected] = useState("all");
  const [files, setFiles] = useState([
    {
      title: "hi",
      imageLink:
        "https://cdn.discordapp.com/attachments/1201847746638651424/1229136974980579481/logo.png?ex=662e9603&is=661c2103&hm=f09afe008189c54ff435c6337c95d77c00f9aa2b33b327c93003ad2556bf3c4a&",
    },
  ]);

  const closeUpdate = () => {
    document.querySelector(".upload__modal").style.display = "none";
    document.querySelector(".upload__dark").style.display = "none";
  };

  const openUpdate = () => {
    document.querySelector(".upload__modal").style.display = "block";
    document.querySelector(".upload__dark").style.display = "block";
  };
  const [option, setOption] = useState(false);
  if(option === true){
    document.querySelector(".file__dropdown").style.display = "flex";
  }else{
    document.querySelector(".file__dropdown").style.display = "none";
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
              <button className="home__upload" onClick={openUpdate}>
                Upload File
              </button>
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
              {Array.from({ length: 8 }, (_, index) => {
                const file = files[index];
                if (file) {
                  return (
                    <div key={index} className="grid__item">
                      <div className="item__top">
                        <div className="item__name">
                          <File />
                          <p>{file.title}</p>
                        </div>
                        <EllipsisVertical
                          className="file__option"
                          onClick={() => setOption(!option)}
                        />
                        <div className="file__dropdown">
                          <Trash />
                          <p>Delete</p>
                        </div>
                      </div>
                      <img
                        className="item__image"
                        src={file.imageLink}
                        alt="image"
                      />
                      <div className="item__position__flex">
                        <img src={avatar} alt="avatar" />
                        <p>You</p>
                      </div>
                    </div>
                  );
                } else {
                  return <Fake key={index} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="upload__modal">
        <div className="upload__top">
          <p>Upload your file here</p>
          <X onClick={closeUpdate} className="upload__close" />
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
