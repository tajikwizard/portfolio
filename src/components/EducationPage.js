import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>IT Specialist </p>
          <p> Tax Commite at the Government of Republic of Tajikistan</p>
          <p>
            <span>Dec'15 2023 - Present</span>
            <a href="/">
              <AddLocationIcon />
              Dushanbe , Tajikistan
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors of Business Information Technology</p>
          <p>Limkokwing Univesity of Malaysia</p>
          <p>
            <span>2018-2021</span>
            <a href="/">
              <AddLocationIcon />
              Cyberjaya, Malaysia
            </a>
          </p>
        </div>
        <div className="education">
          <p>Foundation in Information Technology</p>
          <p>Limkokwing Univesity of Malaysia</p>
          <p>
            <span>2017-2018</span>
            <a href="/">
              <AddLocationIcon /> Cyberjaya, Malaysia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
