import React from "react";
import { useNavigate } from "react-router-dom";

let Upload = () => {
  let navigate = useNavigate();
  let gotohome = () => { 
    navigate("/");
  }
  let gotoupload = () => { 
    navigate("/upload");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "60px",
          boxShadow: "0px 0px 3px rgba(0,0,0,0.2)",
          alignItems: "center",
          cursor:"pointer"
        }}
      >
        <h1 style={{ marginRight: "30vw" }} onClick={gotohome}>pixabay </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30vw",
          }}
        >
          <button
            id="upload-butt"
            style={{ height: "8vh", marginLeft: "20vw" }} onClick={gotoupload}
          >
            <i className="fa-solid fa-upload"></i>upload
          </button>
        </div>
      </div>
      <div id="upload-container">
        <h1 style={{ fontWeight: "bold" }}>Welcome to Pixabay!</h1>
        <p>
          Before you get started, check out our helpful guidelines or{" "}
          <u>learn more </u>
          about our review process.
        </p>
        <div className="upload-cards">
          <div>
            <h4>Content License</h4>
            <p>
              All content is released under the Content License, which makes
              them safe to use without asking for permission - even for
              commercial purposes.
            </p>
          </div>
          <div>
            <h4>Quality</h4>
            <p>
              All media must be high quality, clear and purposeful. The media
              must be original and must exclude graphic nudity, violence or
              hate.
            </p>
          </div>
          <div>
            <h4>Media</h4>
            <p>
              Pixabay offers the largest range of media types. Over 3 million+
              high quality stock photos, vectors, illustrations, videos, music,
              sound effects & GIFs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
