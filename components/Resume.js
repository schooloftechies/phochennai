import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Resume = () => {
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
      subject: "M.B.B.S ",
      university: "Madras Medical College, Chennai",
      date: "2000 – 2006",
    },
    {
      id: 2,
      subject: "MD (Paediatrics)",
      university: "SMS Medical College, Jaipur",
      date: "2007 - 2010",
    },
    {
      id: 3,
      subject: "FNB Fellowship in Paediatric Haematology Oncology",
      university: "National Board of Examinations, New Delhi",
      date: "2012 - 2014",
    },
    {
      id: 4,
      subject: "Fellowship in Paediatric BMT",
      university: "Imperial College Healthcare NHS, London, UK",
      date: "2015 - 2016",
    },
    {
      id: 5,
      subject: "MRCPCH",
      university: "Royal College of Paediatrics and Child Health, London, UK",
      date: "2019",
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
export default Resume;
