import React from "react";
import "../styles/Education.css";

function EducationCard({ year, degree, institution, grade }) {
  return (
    <div className="educationCard">
      <h3>{year}</h3>
      <p className="degree">{degree}</p>
      <p className="institution">{institution}</p>
      <p className="grade">Grade : {grade}</p>
    </div>
  );
}

function Education() {
  const educationData = [
    {
      year: "2020 - 2023",
      degree: "Bachelor of Technology",
      institution: "BVC Engineering College",
      grade: "7.89",
    },
    {
      year: "2016 - 2019",
      degree: "Diploma (ECE)",
      institution: "Col D S Rajy Polytechnic",
      grade: "76.00",
    },
    {
      year: "2015 - 2016",
      degree: "Higher Secondary School",
      institution: "Z P P HIGH School",
      grade: "First  Class Distinction",
    },
  ];

  return (
    <div>
      <h2 className="educationSectionHeader">Education</h2>
      <hr className="educationSectionDivider" />
      <div className="educationCardsContainer">
        {educationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
}

export default Education;