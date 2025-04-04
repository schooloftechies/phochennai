import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const DennaQualification = () => {
  useEffect(() => {
    document.querySelectorAll(".progress_inner").forEach(function (progress) {
      var pValue = parseInt(progress.dataset.value, 10);
      var pColor = progress.dataset.color;
      var pBarWrap = progress.querySelector(".bar");
      var pBar = progress.querySelector(".bar_in");
      var number = progress.querySelector(".number");
      var label = progress.querySelector(".label");

      number.style.right = 100 - pValue + "%";

      setTimeout(function () {
        label.classList.add("opened");
      }, 500);

      pBar.style.width = pValue + "%";
      pBar.style.backgroundColor = pColor;

      setTimeout(function () {
        pBarWrap.classList.add("open");
      });
    });
  }, []);

  const educations = [
    {
      id: 1,
      subject: "FNB - Paediatric Haematology-Oncology ",
      university: "National Board of Examination, New Delhi",
      date: "May 2011",
    },
    {
      id: 2,
      subject: "FNB- Paediatric Haematology-Oncology",
      university: "PHO Chapter- Indian Academy of Paediatrics",
      date: "Jan 2010",
    },
    {
      id: 3,
      subject: "DNB-Paediatrics	",
      university: "National Board of Examination, New Delhi",
      date: "May 2001",
    },
    {
      id: 4,
      subject: "	Diploma in Child Health 	",
      university: "Kasturba Medical College, Manipal (MAHE), Karnataka",
      date: "June 1998",
    },
    {
      id: 5,
      subject: "	M.B.B.S	",
      university: "PSG Inst of Medical Sciences,The Tamil Nadu Dr. MGR Medical University, Chennai (India)",
      date: "January 1995",
    },
    {
      id: 6,
      subject: "MNAMS",
      university: "National Academy of Medical Sciences, New Delhi",
      date: "May 2002	",
    },
  ];

  const experiences = [
    {
      id: 1,
      designation: "MRCPCH",
      company: "Envato Market",
      desc: "Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.",
      date: "2018 - running",
    },
    {
      id: 2,
      designation: "Creative Designer",
      company: "Bahanno Digital",
      desc: "Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.",
      date: "2015 - 2017",
    },
  ];

  const personalSkills = [
    { id: 1, title: "Time Management", value: "90" },
    { id: 2, title: "Effeciency", value: "70" },
    { id: 3, title: "Intigrity", value: "80" },
  ];

  const softwareSkills = [
    { id: 1, title: "Ms Office", value: "80" },
    { id: 2, title: "Photoshop", value: "75" },
    { id: 3, title: "Illustrator", value: "90" },
    { id: 4, title: "Figma", value: "65" },
  ];

  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Qualifications</span>
        <h3>Areas of Expertise</h3>
      </div>
      <div className="resume_inner">
        <div className="left" style={{width:"100%"}}>
          <div className="info_list">
            <div className="iknow_tm_resume_title">
           
            </div>
            <ul>
              {educations.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{education.subject}</h3>
                        <span>{education.university}</span>
                      </div>
                      <div className="year">
                        <span>{education.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        
        </div>
      
      </div>
    </div>
  );
};
export default DennaQualification;
