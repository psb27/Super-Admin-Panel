import React from 'react';
import "./single.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h3 className="title">Information</h3>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h3 className="itemTitle">Jennifer Shaw</h3>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jennifershaw@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 7864545312</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">jennifershaw@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h3 className="title">Last Transactions</h3>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single