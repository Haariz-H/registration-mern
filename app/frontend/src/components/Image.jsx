import React, { useState } from "react";

function Image() {
  const [file, setFile] = useState();
  let shouldHide = true;
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    shouldHide = false;
  }

  return (
    <div className="App">
      <div
        id="toHide"
        style={{ visibility: shouldHide ? "visible" : "hidden" }}
      >
        <h2>Add Image:</h2>
        <input style={{ color: "red" }} type="file" onChange={handleChange} />
        <div>
          <img src={file} />
        </div>
      </div>
    </div>
  );
}

export default Image;
