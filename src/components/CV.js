import React from "react";
import BasicInfo from "./BasicInfo";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import "./CV.css";

export default class CV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      location: "",
      email: "",
      website: "",
      editingBasicInfo: true
    };
  }

  handleInputChange = (inputName, inputValue) => {
    this.setState({[inputName]: inputValue});
  };

  saveBasicInfo = (event) => {
    event.preventDefault();
    this.setState({editingBasicInfo: false});
  };

  editBasicInfo = () => {
    this.setState({editingBasicInfo: true});
  };

  render() {
    return (
      <div className="CV">
        <BasicInfo 
          basicInfo={this.state}
          handleInputChange={this.handleInputChange} 
          saveBasicInfo={this.saveBasicInfo}
          editBasicInfo={this.editBasicInfo} 
        />
        <WorkSection />
        <EducationSection />
      </div>
    );
  }
}