import { context } from "@/context/context";
import { useContext } from "react";

const RishabPresentation = () => {
  const publications = [
    {
      id: 1,
      content: "Paediatric Acute Promyelocytic Leukemia presenting as a paraspinal mass",
      place: " Quarterly meeting of Mumbai Hematology Group",
      date: " 2020",
    },
    {
      id: 2,
      content: "Haplo-identical BMT in a case of sickle cell anemia ",
      place: " Quarterly meeting of Mumbai Hematology Group",
      date: " 2019",
    },
    {
      id: 3,
      content: "Clinico-immunological profile of Primary Immunodeficiency Diseases at a tertiary care children’s hospital in South India ",
      place: " 22nd Annual Pediatric Hematology Oncology Conference (PHOCON) ",
      date: " Benagaluru, 2018",
    },
    {
      id: 4,
      content: "Cytogenetic profile in children with B-Acute Lymphoblastic Leukemia and its correlation with induction outcomes ",
      place: " 22nd Annual Pediatric Hematology Oncology Conference (PHOCON)",
      date: " Bengaluru, 2018.",
    },
    {
      id: 5,
      content: "Medulloblastoma molecular sybtypes: Profile and outcomes from a tertiary care unit in South India ",
      place: " 22nd Annual Pediatric Hematology Oncology Conference (PHOCON)",
      date: " Bengaluru, 2018.",
    },
    {
      id: 6,
      content: "A case of Benign Familial Neonatal Seizures (BFNS) ",
      place: " NEUROPEDICON",
      date: " Ahmedabad, 2016.",
    },
    {
      id: 7,
      content: "A study of referral pattern of neonates at a tertiary care centre and role of TOPS (Temperature, Oxygenation, Perfusion and Sugar) score in assessing morbidity and mortality ",
      place: " GIAPCON",
      date: " Rajkot, 2015 (Awarded 1st place)",
    },
    {
      id: 8,
      content: "Isolation of Group A Beta Hemolytic Streptococci in paediatric age group, antibiotic susceptibility testing and evaluation of anaerobic incubation compared to conventional technique ",
      place: " UG Medical Students’ Regional Research Conference",
      date: " Thiruvananthapuram, 2011",
    },
   
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
      <span>Overview of Research Topics</span>
      <h3>Paper Presentations</h3>
      </div>
      <div className="news_list">
        <ul>
          {publications.map((publication) => (
            <li key={publication.id}>
              <div className="list_inner">
               
                <div className="details">
                 <p>
                  {publication.content}
                 </p>
                  <span className="title">
                    {publication.place}
                  </span>
                  <span className="pre_date" >
                    {publication.date}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RishabPresentation;
