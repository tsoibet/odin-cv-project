import React from "react";

export default class Education extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      school: this.props.school || "",
      startDate: this.props.startDate || "",
      endDate: this.props.endDate || "",
      editing: (this.props.editing === undefined ? true : this.props.editing),
    }
  }

  handleAddSchoolInputChange = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({[event.target.name]: event.target.checked});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  };

  saveSchool = (event) => {
    event.preventDefault();
    this.setState({editing: false});
  };

  showForm = () => {
    this.setState({editing: true});
  }

  deleteForm = () => {
    this.props.deleteEducation(this.props.id);
  }

  render() {
    if (this.state.editing) {
      return (
        <li className="school" data-id={this.state.id}>
          <form onSubmit={this.saveSchool}>
            <input type="text" name="title" placeholder="Title" autoComplete="off" required value={this.state.title} onChange={this.handleAddSchoolInputChange} />
            <input type="text" name="school" placeholder="School Name" autoComplete="off" required value={this.state.school} onChange={this.handleAddSchoolInputChange} />
            <div className="date">
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" name="startDate" type="date" required value={this.state.startDate} onChange={this.handleAddSchoolInputChange} />
            </div>
            <div className="date">
              <label htmlFor="endDate">End Date</label>
              <input id="endDate" name="endDate" type="date" required value={this.state.endDate} onChange={this.handleAddSchoolInputChange} />
            </div>
            <span className="floating buttons">
              <button className="save" type="submit">Save</button>
              <button className="delete" type="reset" onClick={this.deleteForm}>Delete</button>
            </span>
          </form>
        </li>
      );
    } else {
      return(
        <li className="school" data-id={this.state.id}>
          <div>
            <div className="title">{this.state.title}</div>
            <div className="school">{this.state.school}</div>
            <div className="date">{this.state.startDate} - {this.state.endDate}</div>
            <span className="floating buttons">
              <button className="edit" onClick={this.showForm}>Edit</button>
              <button className="delete" onClick={this.deleteForm}>Delete</button>
            </span>
          </div>
        </li>
      );
    }
  }
}
