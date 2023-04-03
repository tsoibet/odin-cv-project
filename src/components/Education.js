import React, { useState } from "react";

export default function Education(props) {

  const [title, setTitle] = useState(props.title || "");
  const [school, setSchool] = useState(props.school || "");
  const [startDate, setStartDate] = useState(props.startDate || "");
  const [endDate, setEndDate] = useState(props.endDate || "");
  const [editing, setEditing] = useState(props.editing === undefined ? true : props.editing);

  const saveSchool = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const showForm = () => {
    setEditing(true);
  }

  const deleteForm = () => {
    props.deleteEducation(props.id);
  }

  if (editing) {
    return (
      <li className="school" data-id={props.id}>
        <form onSubmit={(event) => saveSchool(event)}>
          <input type="text" name="title" placeholder="Title" autoComplete="off" required value={title} onChange={(event) => setTitle(event.target.value)} />
          <input type="text" name="school" placeholder="School Name" autoComplete="off" required value={school} onChange={(event) => setSchool(event.target.value)} />
          <div className="date">
            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" name="startDate" type="date" required value={startDate} onChange={(event) => setStartDate(event.target.value)} />
          </div>
          <div className="date">
            <label htmlFor="endDate">End Date</label>
            <input id="endDate" name="endDate" type="date" required value={endDate} onChange={(event) => setEndDate(event.target.value)} />
          </div>
          <span className="floating buttons">
            <button className="save" type="submit">Save</button>
            <button className="delete" type="reset" onClick={deleteForm}>Delete</button>
          </span>
        </form>
      </li>
    );
  } else {
    return(
      <li className="school" data-id={props.id}>
        <div>
          <div className="title">{title}</div>
          <div className="school">{school}</div>
          <div className="date">{startDate} - {endDate}</div>
          <span className="floating buttons">
            <button className="edit" onClick={showForm}>Edit</button>
            <button className="delete" onClick={deleteForm}>Delete</button>
          </span>
        </div>
      </li>
    );
  }

}
