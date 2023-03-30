import React from "react";
import Work from "./Work";

export default class WorkSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [<Work key={0} id={0} title="Junior Software Engineer" company="ABC Company" currentJob={true} startDate="2022-04-01" description="This is an example." editing={false} deleteWork={this.deleteWork} />],
      nextId: 1,
    }
  }

  addWork = () => {
    this.setState({
      jobs: this.state.jobs.concat(<Work key={this.state.nextId} id={this.state.nextId} deleteWork={this.deleteWork} />),
      nextId: this.state.nextId + 1,
    });
  }

  deleteWork = (id) => {
    this.setState({jobs: this.state.jobs.filter((job) => job.props.id !== id)});
  }

  render() {
    
    return (
      <div className="Work section">
        <div className="title">Work Experience</div>
        {
          this.state.jobs.length > 0 && 
          <ul className="jobs">
            {this.state.jobs.map(job => job)}
          </ul>
        }
        <div className="sectionFooter">
          <button className="add" onClick={this.addWork}>Add</button>
        </div>
      </div>
    );
  }
}
