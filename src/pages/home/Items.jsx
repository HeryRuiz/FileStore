import React, { useState, useEffect } from "react";
import { Download, EllipsisVertical, FileText, Trash } from "lucide-react";
import { get, ref } from "firebase/database";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { database, auth, storage } from "../firebase/firebase";
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
          const filesArray = Object.entries(filesData).map(([id, data]) => ({
            id,
            title: data.title,
          }));
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
  return (
    <div className="home__grid">
      {files.map((file) => (
        <div key={file.id} className="grid__item">
          <div className="item__top">
            <div className="item__name">
              <Download className="file__download" />
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
            <div className="item__avatar">H</div>
            <p>You</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
