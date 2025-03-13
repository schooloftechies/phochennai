import { context } from "@/context/context";
import { useContext, useState } from "react";

const RishabExperience = () => {
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
    <div className="iknow_tm_affiliations">
      <div className="w-100 iknow_tm_main_title">
        <span>Experience</span>
        <h3 className="w-100"> Professional Experience</h3>
      </div>

      <ul className="experience">
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Consultant  </h4>
              <p>
              Dept. of Paediatric Haematology, Oncology, Blood and Marrow Transplantation ,
              Dr. Rela Institute and Medical Centre  
              </p>
            </div>
            <div className="appointment_date">
              <span>Chennai</span>
              <span>2021 - 2024 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Senior Clinical Fellow</h4>
              <p>
              Paediatric Haematology and BMT ,  
St. Mary’s Hospital, Imperial College NHS Trust

              </p>
            </div>
            <div className="appointment_date">
              <span>London, UK                                        </span>
              <span>2020 - 2021 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Senior Clinical Fellow                                                                                               </h4>
              <p>
              Paediatric Haematology-Oncology and BMT,
Kokilaben Dhirubhai Ambani Hospital

              </p>
            </div>
            <div className="appointment_date">
              <span> Mumbai, India</span>
              <span>2019 - 2020 </span>
            </div>
          </div>
        </li>
        
      </ul>
      <div className="w-100 iknow_tm_main_title">
        <h3 className="w-100">Research Experience</h3>
      </div>
      <div className="affiliations">
        <ul>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            	Conducted a retrospective observational study titled “Clinico-immunological profile of Primary Immunodeficiency Diseases at a tertiary care children’s hospital in South India” – submitted as a dissertation as part of Post-doctoral Fellowship.</p>
          </li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Conducted a study in the Neonatal Intensive Care Unit over a period of two years (2015-2017) titled “A study of renal parameters and serum calcium levels in neonates with birth asphyxia” – submitted as a dissertation as part of Post-graduate degree (MD).
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            	Conducted a study in the Neonatal Intensive Care Unit during Post Graduation over a period of two years (2014-2016)  titled “A study of referral pattern of neonates at a tertiary care centre and role of TOPS (Temperature, Oxygenation, Perfusion and Sugar) score in assessing morbidity and mortality”.
            </p></li>
            <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Awarded ICMR Short Term Studentship (STS) in 2010 for a project titled “Isolation of Group A Beta Hemolytic Streptococci in paediatric age group, antibiotic susceptibility testing and evaluation of anaerobic incubation compared to conventional technique”.
            </p></li>
        </ul>
      </div>
      <div className="w-100 iknow_tm_main_title">
        <h3 className="w-100">Other Academic Experience</h3>
      </div>
      <div className="affiliations">
        <ul>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" />
            <p>Attended a workshop on “Practical Paediatric Oncology”, conducted by the Indian Academy of Paediatrics – Paediatric Haematology-Oncology Chapter in association with SIOP, 2019.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Attended the Mid-term Paediatric Hematology-Oncology (PHOCON) CME, 2018.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Completed the Post Graduate Program in Pediatric Nutrition (PGPN) conducted by Nestle Nutrition Institute in association with Boston University School of Medicine. (2016)
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Completed the Advanced NRP provider course of the IAP Neonatal Resuscitation Program, 2015.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
            Attended the 23rd European Students’ Conference, 2012 at Berlin.
            </p></li>
        
        </ul>
      </div>
    </div>
  );
};
export default RishabExperience;
