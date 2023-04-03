import React, { useState } from "react";

export default function Work(props) {

  const [title, setTitle] = useState(props.title || "");
  const [company, setCompany] = useState(props.company || "");
  const [currentJob, setCurrentJob] = useState(props.currentJob || false);
  const [startDate, setStartDate] = useState(props.startDate || "");
  const [endDate, setEndDate] = useState(props.endDate || "");
  const [description, setDescription] = useState(props.description || "");
  const [editing, setEditing] = useState(props.editing === undefined ? true : props.editing);

  const saveJob = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const showForm = () => {
    setEditing(true);
  }

  const deleteForm = () => {
    props.deleteWork(props.id);
  }

  if (editing) {
    return (
      <li className="job" data-id={props.id}>
        <form onSubmit={saveJob}>
          <input type="text" name="title" placeholder="Title" autoComplete="off" required value={title} onChange={(event) => setTitle(event.target.value)} />
          <input type="text" name="company" placeholder="Company Name" autoComplete="off" required value={company} onChange={(event) => setCompany(event.target.value)} />
          <div className="currentJob">
            <input type="checkbox" name="currentJob" id="currentJob" checked={currentJob} onChange={(event) => setCurrentJob(event.target.checked)} />
            <label htmlFor="currentJob">I am currently working in this role</label>
          </div>
          <div className="date">
            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" name="startDate" type="date" required value={startDate} onChange={(event) => setStartDate(event.target.value)} />
          </div>
          <div className="date">
            <label className={currentJob ? "greyOut" : ""} htmlFor="endDate">End Date</label>
            <input id="endDate" name="endDate" type="date" disabled={currentJob} required value={endDate} onChange={(event) => setEndDate(event.target.value)} />
          </div>
          <textarea name="description" placeholder="Description" rows="4" value={description} onChange={(event) => setDescription(event.target.value)} />
          <span className="floating buttons">
            <button className="save" type="submit">Save</button>
            <button className="delete" type="reset" onClick={deleteForm}>Delete</button>
          </span>
        </form>
      </li>
    );
  } else {
    return(
      <li className="job" data-id={props.id}>
        <div>
          <div className="title">{title}</div>
          <div className="company">{company}</div>
          <div className="date">{startDate} - {currentJob ? "Present" : endDate}</div>
          <div className="description">{description}</div>
          <span className="floating buttons">
            <button className="edit" onClick={showForm}>Edit</button>
            <button className="delete" onClick={deleteForm}>Delete</button>
          </span>
        </div>
      </li>
    );
  }

}
