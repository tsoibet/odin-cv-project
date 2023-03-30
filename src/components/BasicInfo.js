import React from "react";

export default class BasicInfo extends React.Component {

  handleInputChange = (event) => {
    this.props.handleInputChange(event.target.name, event.target.value);
  };

  saveBasicInfo = (event) => {
    this.props.saveBasicInfo(event);
  };

  editBasicInfo = () => {
    this.props.editBasicInfo();
  }

  render() {

    const fullName = this.props.basicInfo.fullName;
    const location = this.props.basicInfo.location;
    const email = this.props.basicInfo.email;
    const website = this.props.basicInfo.website;
    const editing = this.props.basicInfo.editingBasicInfo;

    if (editing) {
      return (
        <div className="BasicInfo section">
          <form name="BasicInfo" onSubmit={this.saveBasicInfo}>
            <input type="text" name="fullName" placeholder="Full Name" autoComplete="off" required value={fullName} onChange={this.handleInputChange} />
            <input type="text" name="location" placeholder="Location" autoComplete="off" required value={location} onChange={this.handleInputChange} />
            <input type="email" name="email" placeholder="Email" autoComplete="off" required value={email} onChange={this.handleInputChange} />
            <input type="url" name="website" placeholder="Website" autoComplete="off" value={website} onChange={this.handleInputChange} />
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
            <button className="floating edit" onClick={this.editBasicInfo}>Edit</button>
          </div>
        </div>
      );
    }
  }
}