import React from "react";
import BasicInfo from "./BasicInfo";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import "./CV.css";

export default function CV() {

  return (
    <div className="CV">
      <BasicInfo />
      <WorkSection />
      <EducationSection />
    </div>
  );

}
