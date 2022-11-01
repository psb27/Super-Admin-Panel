import React from 'react';
import "./featured.scss";

import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Revenue : </h3>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
      <p className="title">Total sales made today</p>
      <p className="amount">$450</p>
      <p className="desc">Previous transactions processing. Last payment may not be included.</p>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">$112.5k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowUpIcon fontSize="small" />
            <div className="resultAmount">$112.5k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult positive">
            <KeyboardArrowUpIcon fontSize="small" />
            <div className="resultAmount">$112.5k</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Featured