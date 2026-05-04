import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  console.log(props.company);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt="img" />
          <button>
            Save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.payPerHour}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
