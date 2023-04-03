import React, { useState } from "react";

export default function BasicInfo() {
  
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [editingBasicInfo, setEditingBasicInfo] = useState(true);

  const saveBasicInfo = (event) => {
    event.preventDefault();
    setEditingBasicInfo(false);
  };

  const editBasicInfo = () => {
    setEditingBasicInfo(true);
  };

  if (editingBasicInfo) {
    return (
      <div className="BasicInfo section">
        <form name="BasicInfo" onSubmit={(event) => saveBasicInfo(event)}>
          <input type="text" name="fullName" placeholder="Full Name" autoComplete="off" required value={fullName} onChange={(event) => setFullName(event.target.value)} />
          <input type="text" name="location" placeholder="Location" autoComplete="off" required value={location} onChange={(event) => setLocation(event.target.value)} />
          <input type="email" name="email" placeholder="Email" autoComplete="off" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="url" name="website" placeholder="Website" autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
          <button className="floating save" type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="BasicInfo section">
        <div>
          <div name="fullName">{fullName}</div>
          <div name="location">{location}</div>
          <div name="email">{email}</div>
          <div name="website">{website}</div>
          <button className="floating edit" onClick={editBasicInfo}>Edit</button>
        </div>
      </div>
    );
  }

}
