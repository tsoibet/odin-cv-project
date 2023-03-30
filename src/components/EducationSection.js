import React from "react";
import Education from "./Education";

export default class EducationSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: [<Education key={0} id={0} title="Bachelor's Degree in Computer Science" school="The Example University" startDate="2018-04-01" endDate="2022-03-31" editing={false} deleteEducation={this.deleteEducation} />],
      nextId: 1,
    }
  }

  addEducation = () => {
    this.setState({
      schools: this.state.schools.concat(<Education key={this.state.nextId} id={this.state.nextId} deleteEducation={this.deleteEducation} />),
      nextId: this.state.nextId + 1,
    });
  }

  deleteEducation = (id) => {
    this.setState({schools: this.state.schools.filter((school) => school.props.id !== id)});
  }

  render() {
    
    return (
      <div className="Education section">
        <div className="title">Education</div>
        {
          this.state.schools.length > 0 && 
          <ul className="schools">
            {this.state.schools.map(school => school)}
          </ul>
        }
        <div className="sectionFooter">
          <button className="add" onClick={this.addEducation}>Add</button>
        </div>
      </div>
    );
  }
}
