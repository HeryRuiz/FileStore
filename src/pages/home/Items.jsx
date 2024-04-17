import React, { useState, useEffect } from "react";
import { Download, EllipsisVertical, FileText, Trash } from "lucide-react";
import { get, ref, remove } from "firebase/database";
import {
  getDownloadURL,
  ref as storageRef,
  deleteObject,
} from "firebase/storage";
import { database, auth, storage } from "../firebase/firebase";
import Fake from "./Fake";
function Items() {
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState({});

  useEffect(() => {
    const fetchFiles = async () => {
      const filesRef = ref(database, "files");
      try {
        const snapshot = await get(filesRef);
        const filesData = snapshot.val();
        if (filesData) {
          const filesArray = Object.entries(filesData)
            .map(([id, data]) => ({
              id,
              title: data.title,
              user: data.user,
            }))
            .filter((file) => file.user === auth.currentUser.uid);
          const urls = {};
          for (const file of filesArray) {
            const url = await fetchImageURL(file.id);
            urls[file.id] = url;
          }
          setImageUrls(urls);

          setFiles(filesArray);
        } else {
          setFiles([]);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  useEffect(() => {
    const fetchImageURLs = async () => {
      const urls = {};
      for (const file of files) {
        const url = await fetchImageURL(file.id);
        urls[file.id] = url;
      }
      setImageUrls(urls);
    };

    fetchImageURLs();
  }, [files]);

  const fetchImageURL = async (fileId) => {
    const storageRefPath = storageRef(storage, `files/${fileId}`);
    try {
      const downloadURL = await getDownloadURL(storageRefPath);
      return downloadURL;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };

  const toggleDropdown = (fileId) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [fileId]: !prevState[fileId],
    }));
  };

  const handleDownloadFile = (fileId) => {
    const downloadURL = imageUrls[fileId];
    if (downloadURL) {
      window.open(downloadURL, "_blank");
    }
  };
  const handleDeleteFile = async (fileId) => {
    const fileRef = ref(database, `files/${fileId}`);
    try {
      await remove(fileRef);
      const storageRefPath = storageRef(storage, `files/${fileId}`);
      await deleteObject(storageRefPath);
      const updatedFiles = files.filter((file) => file.id !== fileId);
      setFiles(updatedFiles);
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const renderItems = () => {
    const renderedItems = [];
    const totalItems = files.length;
    const remainingSlots = 8 - totalItems;

    for (let i = 0; i < totalItems; i++) {
      const file = files[i];
      renderedItems.push(
        <div key={file.id} className="grid__item">
          <div className="item__top">
            <div className="item__name">
              <Download
                className="file__download"
                onClick={() => handleDownloadFile(file.id)}
              />
              <p>{file.title}</p>
            </div>
            <EllipsisVertical
              className="file__option"
              onClick={() => toggleDropdown(file.id)}
            />
            <div
              className="file__dropdown"
              style={{
                display: dropdownVisible[file.id] ? "flex" : "none",
              }}
              onClick={() => handleDeleteFile(file.id)}
            >
              <Trash />
              <p>Delete</p>
            </div>
          </div>
          <div className="item__image">
            {imageUrls[file.id] ? (
              <img
                className="item__image"
                src={imageUrls[file.id]}
                alt="image"
              />
            ) : (
              <div>
                <FileText className="file__icon" size={60} />
              </div>
            )}
          </div>
          <div className="item__position__flex">
            <div className="item__avatar">
              {auth ? auth.currentUser.email[0].toLocaleUpperCase() : "Y"}
            </div>
            <p>You</p>
          </div>
        </div>
      );
    }

    for (let i = 0; i < remainingSlots; i++) {
      renderedItems.push(<Fake key={`fake-${i}`} />);
    }

    return renderedItems;
  };

  return <div className="home__grid">{renderItems()}</div>;
}
export default Items;
