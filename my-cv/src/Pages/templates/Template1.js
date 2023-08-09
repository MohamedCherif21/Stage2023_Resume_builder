import React, { useEffect, useState } from "react";
import "../../Ressources/templates.css";
import axios from "axios";

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Template1() {
  const user = JSON.parse(localStorage.getItem("my-cv-users"));
  const profileImage = user.data.profileImage; // Récupère l'URL de l'image de profil

  return (
    <div className="cv-template">
      <div className="tops">
        <h1>
          {user.data.firsName.toUpperCase()} {user.data.lastname.toUpperCase()}
        </h1>
        <div></div>

        <div className="contact-info">
          <p>Email: {user.data.email}</p>
          <p>Mobile: {user.data.mobile}</p>
          <p>City: {user.data.city}</p>
        </div>
      </div>
      <br></br>
      <p>{user.data.ProfessionalSummary}</p>
  <div>
  <img src={`http://localhost:3000/Users/cheri/Stage2023/${profileImage}`} alt="Uploaded" />
  </div>


      {/* Skills & Education Section */}
      <div className="sections">
        <h2>Skills & Education</h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h3>Skills</h3>
            <ul>
              {user.data.skills.map((skills, index) => (
                <li key={index}>
                  {skills.skill} - {skills.degree}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Education</h3>
            <ul>
              {user.data.education.map((education, index) => (
                <li key={index}>
                  <b>From</b> {formatDate(education.dateRange[0])} <b>To</b>{" "}
                  {formatDate(education.dateRange[1])}
                  <br></br>
                  {education.degree} <b>In</b> {education.institution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience / Projects Section */}
      <div className="sections">
        <h2>Experience & Projects</h2>
        <hr />
        <div className="experience-sections">
          {user.data.employment.map((employment, index) => (
            <div key={index} className="experience-items">
              <h3>Experience</h3>
              <div>
                <b>From</b> {formatDate(employment.dateRangeemployment[0])}{" "}
                <b>To</b> {formatDate(employment.dateRangeemployment[1])}{" "}
              </div>
              <p>Job: {employment.job}</p>
              <p>Employer: {employment.Employer}</p>
              <p>City: {employment.city}</p>
            </div>
          ))}
        </div>
        <div className="projects-sections">
          {user.data.Project.map((project, index) => (
            <div key={index} className="project-items">
              <h3>Projects</h3>
              <div>
                <b>From</b> {formatDate(project.dateRangeexperience[0])}{" "}
                <b>To</b> {formatDate(project.dateRangeexperience[1])}{" "}
              </div>
              <p>Project: {project.Project}</p>
              <p>Description: {project.Descriptionproj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template1;
