import React, { useState } from "react";
import Work from "./Work";

export default function WorkSection (){

  const [jobs, setJobs] = useState([{
    key: 0, 
    id: 0, 
    title: "Junior Software Engineer", 
    company: "ABC Company", 
    currentJob: true, 
    startDate: "2022-04-01", 
    description: "This is an example.", 
    editing: false
  }]);
  const [nextId, setNextId] = useState(1);

  const addWork = () => {
    setJobs(jobs.concat({
        id: nextId
      }));
    setNextId(nextId + 1);
  }

  const deleteWork = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  return (
    <div className="Work section">
      <div className="title">Work Experience</div>
      {
        jobs.length > 0 && 
        <ul className="jobs">
          {jobs.map(job => 
            <Work 
              key={job.id} 
              id={job.id} 
              title={job.title} 
              company={job.company} 
              currentJob={job.currentJob} 
              startDate={job.startDate} 
              description={job.description} 
              editing={job.editing} 
              deleteWork={deleteWork} />)}
        </ul>
      }
      <div className="sectionFooter">
        <button className="add" onClick={addWork}>Add</button>
      </div>
    </div>
  );

}
