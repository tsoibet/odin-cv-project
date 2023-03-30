import React from "react";

export default class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      company: this.props.company || "",
      currentJob: this.props.currentJob || false,
      startDate: this.props.startDate || "",
      endDate: this.props.endDate || "",
      description: this.props.description || "",
      editing: (this.props.editing === undefined ? true : this.props.editing),
    }
  }

  handleAddJobInputChange = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({[event.target.name]: event.target.checked});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  };

  saveJob = (event) => {
    event.preventDefault();
    this.setState({editing: false});
  };

  showForm = () => {
    this.setState({editing: true});
  }

  deleteForm = () => {
    this.props.deleteWork(this.props.id);
  }

  render() {
    if (this.state.editing) {
      return (
        <li className="job" data-id={this.state.id}>
          <form onSubmit={this.saveJob}>
            <input type="text" name="title" placeholder="Title" autoComplete="off" required value={this.state.title} onChange={this.handleAddJobInputChange} />
            <input type="text" name="company" placeholder="Company Name" autoComplete="off" required value={this.state.company} onChange={this.handleAddJobInputChange} />
            <div className="currentJob">
              <input type="checkbox" name="currentJob" id="currentJob" checked={this.state.currentJob} onChange={this.handleAddJobInputChange} />
              <label htmlFor="currentJob">I am currently working in this role</label>
            </div>
            <div className="date">
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" name="startDate" type="date" required value={this.state.startDate} onChange={this.handleAddJobInputChange} />
            </div>
            <div className="date">
              <label className={this.state.currentJob ? "greyOut" : ""} htmlFor="endDate">End Date</label>
              <input id="endDate" name="endDate" type="date" disabled={this.state.currentJob} required value={this.state.endDate} onChange={this.handleAddJobInputChange} />
            </div>
            <textarea name="description" placeholder="Description" rows="4" value={this.state.description} onChange={this.handleAddJobInputChange} />
            <span className="floating buttons">
              <button className="save" type="submit">Save</button>
              <button className="delete" type="reset" onClick={this.deleteForm}>Delete</button>
            </span>
          </form>
        </li>
      );
    } else {
      return(
        <li className="job" data-id={this.state.id}>
          <div>
            <div className="title">{this.state.title}</div>
            <div className="company">{this.state.company}</div>
            <div className="date">{this.state.startDate} - {this.state.currentJob ? "Present" : this.state.endDate}</div>
            <div className="description">{this.state.description}</div>
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
