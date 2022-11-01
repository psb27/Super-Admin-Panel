import React, { useState } from 'react';
import "./new.scss";

import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

// component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");

  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h3>{title}</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={e => setFile(e.target.files[0])} // uploading a image file 
                  style={{display: "none"}}/>
              </div>
              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New