import React, { useEffect, useState } from "react";
import { File, Grid3X3, Rows2, X } from "lucide-react";
import "./styles/Home.css";

import { database, auth, storage } from "../firebase/firebase";
import { ref, set, push } from "firebase/database";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import Items from "./Items";

function Home() {
  const [selected, setSelected] = useState("all");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadFile, setUploadFile] = useState(null);

  const closeUpdate = () => {
    document.querySelector(".upload__modal").style.display = "none";
    document.querySelector(".upload__dark").style.display = "none";
  };

  const openUpdate = () => {
    document.querySelector(".upload__modal").style.display = "block";
    document.querySelector(".upload__dark").style.display = "block";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fileData = {
        title: uploadTitle,
        user: auth.currentUser.uid,
      };
      const newFileKey = push(ref(database, "files")).key;
      await set(ref(database, `files/${newFileKey}`), fileData);
      const storageRefPath = storageRef(storage, `files/${newFileKey}`);
      await uploadBytes(storageRefPath, uploadFile);
      localStorage.setItem("hasSubmittedBefore", "true");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
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
            <Items />
          </div>
        </div>
      </section>
      <div className="upload__modal">
        <div className="upload__top">
          <p>Upload your file here</p>
          <X onClick={closeUpdate} className="upload__close" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="upload__div">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Title"
              maxLength={8}
              className="form__input upload__input "
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              required
            />
          </div>
          <div className="upload__div">
            <label htmlFor="">File</label>
            <input
              type="file"
              placeholder="Title"
              className="form__input upload__input "
              onChange={(e) => setUploadFile(e.target.files[0])}
              required
            />
          </div>
          <button className="home__upload upload__button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="upload__dark"></div>
    </>
  );
}

export default Home;
