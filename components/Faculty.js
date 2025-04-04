import { context } from "@/context/context";
import { useContext } from "react";

const Faculty = () => {
  const faculty = [
    {
      id: 1,
      content: "1.	Participated as faculty in the 1st meeting of ‘Society of Pediatric Cellular Therapy and Transplantation’  ",
      place: "Goa",
      date:"Feb 2024",
    },
    {
      id: 2,
      content: "2.	Participated as faculty in the 2nd Emirates Pediatric Bone Marrow Transplant Congress (EPBMTC) held at Abu Dhabi ",
      place: ", UAE ",
      date:"Oct 2023",
    },
    {
      id: 3,
      content: "3.	Participated as faculty in panel discussion on ‘Current Practices in Donor selection’ in the DKMS Symposium  ",
      place: "Bangalore",
      date:"Sept 2023",
    },
    {
      id: 4,
      content: " 4.	Participated as faculty (Posters Judge)  in ‘4th Annual Meeting of the Indian Society of Blood and Marrow Transplantation Conference’ ",
      place: "Bangalore  ",
      date:"May 2023",
    },
    {
      id: 5,
      content: " 5.	Participated as faculty in ‘TAMPOS – Tamil Nadu Medical and Pediatric Oncologist Society Conference’ ",
      place: " Madurai ",
      date:"Feb 2023",
    },
    {
      id: 6,
      content: " 6.	Participated as faculty in ‘2nd Annual Highlights of the European Society for Blood and Marrow Transplantation’  ",
      place: "New Delhi ",
      date:"May 2019",
    },
    {
      id: 7,
      content: " 8.	Participated as faculty in ‘SIOP PODC nutrition workshop program’ ",
      place: "Chennai ",
      date:"January 2019",
    },
    {
      id: 8,
      content: "13.	Participated as faculty in TPPOG (Tamil Nadu Puducherry Paediatric Oncology Group) meet held in JIPMER ",
      place: "Puducherry ",
      date:"Jan 27, 2018",
    },
    {
      id: 9,
      content: "14.	Participated as International Faculty in Haem Icon 2017, annual conference of Sri Lanka College of Haematologists, and gave a talk on ‘Treatment approaches in childhood acute leukemia – an update’, held at Hikkaduwa ",
      place: "Sri Lanka ",
      date:"Sept 28-29, 2017",
    },
    {
      id: 10,
      content: "15.	Participated as Faculty in Paediatric Oncology Nursing Workshop in IAP-PHO chapter – Pediatric Oncology in developing countries (CCLG) on 4-5 Feb, 2017 at Sri Ramachandra Medical College, ",
      place: " Chennai, India",
      date:"4-5 Feb, 2017 ",
    },
    {
      id: 11,
      content: " 17.	Participated in “PHOCON 2016”, 20th National Annual Paediatric Hematology Oncology Conference PHO Chapter of IAP ",
      place: "Mumbai, India",
      date:"5-6 Nov 2016",
    },
    
   
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
      
        <h3>Courses & Conferences Attended </h3>
      </div>
      <div className="news_list">
        <ul>
          {faculty.map((faculty) => (
            <li key={faculty.id}>
            <div className="appointment_inner">
               <div>
                <p>
                {faculty.content}
                </p>
               </div>
               <div className="appointment_date" >
                 <span>{faculty.place}</span>
                 <span>{faculty.date}</span>
               </div>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Faculty;
