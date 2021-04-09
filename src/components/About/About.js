import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import ImageSection from "../ImageSection/ImageSction";
import ProgressBar from "../../components/Progess/Progess";
const About = () => {
  const testData = [{ bgcolor: "#037FFF", completed: 60 },
  { bgcolor: "#037FFF", completed: 70 },
  { bgcolor: "#037FFF", completed: 60 },
  { bgcolor: "#037FFF", completed: 85 },
  { bgcolor: "#037FFF", completed: 66 },
  { bgcolor: "#037FFF", completed: 70 },
  { bgcolor: "#037FFF", completed: 80 }];
  return (
    <div className="about">
      <Title Title="About Me" />
      <ImageSection />
      <Title Title="Skills" />
      <div class="skills-section">
        <div className="skills-heading">
          <SubTitle sub_title="React" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[0].completed}
          />
        </div>
       
        <div className="skills-heading">
          <SubTitle sub_title="Javascript" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[1].completed}
          />
        </div>
        <div className="skills-heading">
          <SubTitle sub_title="Python" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[2].completed}
          />
        </div>
        <div className="skills-heading">
          <SubTitle sub_title="PHP" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[3].completed}
          />
        </div>
        <div className="skills-heading">
          <SubTitle sub_title="Web Designing" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[4].completed}
          />
        </div>
        <div className="skills-heading">
          <SubTitle sub_title="UI/Ux Design" />
        </div>
        <div className="skills-bar">
          <ProgressBar
            bgcolor={testData[0].bgcolor}
            completed={testData[5].completed}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
