import React, { useState } from "react";
import "./Home.css";
import Button from "../components/Button";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <main>
      <div className="maincontainer">
        <ul className="mainmenu">
          <li>Resize Image</li>
          <li>Crop Image</li>
          <li>Remove Background</li>
          <li>Convert to PDF</li>
        </ul>
      </div>
      <div className="mainarea">
        <div>

        <input
          type="file"
          name=""
          id=""
          onChange={(e) => setSelectedImg(e.target.files[0])}
          />
        {/* <Button text='upload image' /> */}
          </div>

        {selectedImg && (
          <div className="uploadedimg">
            <img src={URL.createObjectURL(selectedImg)} alt="" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
