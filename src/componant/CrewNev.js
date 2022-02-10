import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CrewNev = () => {
  return (
    <div>
      <div className="crewsi">
        <div className="lo ">
          <Link className="dot " to="/crew/1">
            B
          </Link>
        </div>
        <div className="lo ">
          <Link className="dot " to="/crew/2">
            B
          </Link>
        </div>
        <div className="lo">
          <Link className="dot " to="/crew/3">
            B
          </Link>
        </div>
        <div className="lo">
          <Link className="dot " to="/crew/4">
            B
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CrewNev;
