import {Link} from "react-router-dom";
import Url from "../../assets/fake-data/url.jsx";
import React from 'react';
import './TitleBar.scss';

const TitleBar = ({ title, breadcrumb, buttonText, buttonOnClick }) => {
  return (
    <div className="title-bar">
      <div className="breadcrumb">{breadcrumb}</div>
      <div className="title-row">
        <div className="title">{title}</div>
        {buttonText && (
          <Link className="action-button" to={buttonOnClick}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleBar;
