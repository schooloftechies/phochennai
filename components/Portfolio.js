import { context } from "@/context/context";
import { useContext, useState } from "react";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [active, setActive] = useState("all");
  const activeLi = (value) => (active == value ? "current" : "");
  const activeContent = (value) => {
    return active === "all" || active === value ? "show" : "hidden";
  };

  const handelClick = (value, e) => {
    e.preventDefault();
    // First, set the "active" state to hide all items
    setActive("none");
    // Then, after a brief delay, set it to show all items
    setTimeout(() => {
      setActive(value);
    }, 0);
  };

  return (
    <div className="iknow_tm_portfolio">
      <div className="iknow_tm_main_title">
 
        <h3>Expertise</h3>
      </div>
      <div className="portfolio_filter">
        <ul>
          <li>
            <a
              href="#"
              className={activeLi("all")}
              onClick={(e) => handelClick("all", e)}
              data-filter="*"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("current")}
              onClick={(e) => handelClick("current", e)}
              data-filter=".current"
            >
              Current Appointment
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("previous")}
              onClick={(e) => handelClick("previous", e)}
              data-filter=".previous"
            >
              Previous Appointment
            </a>
          </li>
         
        </ul>
      </div>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <li className={`current ${activeContent("current")}`}>
            <div className="appointment_inner">
               <div>
                <h4>MGM Healthcare</h4>
                <p>
                Senior Consultant, Paediatric Haematology, Oncology and Blood & Marrow Transplantation
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>May 2024 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Dr Rela Institute and Medical Centre</h4>
                <p>
                Senior Consultant, Paediatric Haematology, Oncology and Blood & Marrow Transplantation
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2022 - 2024 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Dr Rela Institute and Medical Centre</h4>
                <p>
               Consultant, Paediatric Haematology, Oncology and Blood & Marrow Transplantation, 
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2019 - 2022 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Gleneagles Global Health City</h4>
                <p>
                Consultant, Paediatric Haematology, Oncology and Blood & Marrow Transplantation
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2016 - 2019 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>St. Mary’s Hospital, Imperial College Healthcare NHS</h4>
                <p>
                International Clinical Fellow, Paediatric Haematology and BMT
                </p>
               </div>
               <div className="appointment_date" >
                 <span>London </span>
                 <span>2015 - 2016 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4> Global Hospitals</h4>
                <p>
                	Junior Consultant, Paediatrics, Paediatric Haematology and Oncology
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2014 - 2015 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Saveetha Medical College</h4>
                <p>
                	Assistant Professor, Department of Paediatrics
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>Mar 2014 to Sep 2014 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Apollo Specialty Hospital</h4>
                <p>
                	Fellow, Paediatric Haematology and Oncology (under two-year fellowship program conducted by the National Board of examinations in India), 
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2012 - 2014 </span>
               </div>
            </div>
          </li>
          <li className={`previous ${activeContent("previous")}`}>
            <div className="appointment_inner">
               <div>
                <h4>Sri Muthukumaran Medical College</h4>
                <p>
                Assistant Professor, Paediatrics, 
                </p>
               </div>
               <div className="appointment_date" >
                 <span>Chennai</span>
                 <span>2010 - 2012 </span>
               </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Portfolio;
