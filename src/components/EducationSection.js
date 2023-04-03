import React, { useState } from "react";
import Education from "./Education";

export default function EducationSection() {

  const [schools, setSchools] = useState([{
    key: 0, 
    id: 0, 
    title: "Bachelor's Degree in Computer Science", 
    school: "The Example University", 
    startDate: "2018-04-01", 
    endDate: "2022-03-31", 
    editing: false
  }]);
  const [nextId, setNextId] = useState(1);

  function addEducation() {
    setSchools(schools.concat({
      id: nextId
    }));
    setNextId(nextId + 1);
  }

  function deleteEducation(id) {
    setSchools(schools.filter(school => school.id !== id));
  }
    
  return (
    <div className="Education section">
      <div className="title">Education</div>
      {
        schools.length > 0 && 
        <ul className="schools">
          {schools.map(school =>
            <Education 
              key={school.id} 
              id={school.id} 
              title={school.title}
              school={school.school} 
              startDate={school.startDate} 
              endDate={school.endDate} 
              editing={school.editing} 
              deleteEducation={deleteEducation} />)}
        </ul>
      }
      <div className="sectionFooter">
        <button className="add" onClick={addEducation}>Add</button>
      </div>
    </div>
  );

}
