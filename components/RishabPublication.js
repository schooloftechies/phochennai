import { context } from "@/context/context";
import { useContext } from "react";

const RishabPublication = () => {
  const publications = [
    {
      id: 1,
      content: " 	Sivasankaran M, Munirathnam D, Balasubramanian S, Agrawal S, Deshpande S, Bharadwaj R, Dhanalakshmi K, Kumar V. Diagnostic Spectrum and Clinical Profile of Primary Immunodeficiency Disorders at a Tertiary Care Children Hospital in Southern India",
      place: ". Indian Pediatrics 58, 246–249 (2021) ",
    },
    {
      id: 2,
      content: " 	Bharadwaj R, Chickabasaviah YT, Rao S, Srinivasan A, Balasubramaniam C, Chandrasekhar S, Scott JX. Rosette-forming Glioneuronal Tumor in the optic pathway of a child. ",
      place: " Journal of Pediatric Hematology/Oncology. 2020 Oct1:42(7):e655-8",
    },
    {
      id: 3,
      content: " 	Bharadwaj R, Raman T, Thangadorai R, Munirathnam D. Targeted Next Generation Sequencing (NGS) to diagnose hereditary hemolytic anemias.",
      place: "International Journal of Hematology-Oncology and Stem Cell Research. 2020 Jul 1;14(3):177 ",
    },

    {
      id:4 ,
      content: "	Sivasankaran M, Bharadwaj R, Sivabalan S, Thangadorai R, Kumar V, Munirathnam D. Non-malignant lymphoproliferative disorders in children ",
      place: "A case series. Indian Journal of Hematology and Blood Transfusion. 2020 Jul 27:1-5 ",
    },
    {
      id: 5,
     content: "	Jacob ES, Matheskumar S, Bharadwaj R. Group A Streptococcal carriage in children with ADHD: Antibiotic resistance and associated ASO levels ",
      place: " International Journal of Current Microbiology and Applied Sciences. 2019;8(3):472-5",
    },
    {
      id: 6,
      content: " 	Parekh ZR, Bharadwaj R, Parmar G, Shah A. Study of referral pattern of neonates at tertiary care centre and role of TOPS score in assessing morbidity and mortality.",
      place: ". National Journal of Community Medicine. 2018;9(3):157-60 ",
    },
    {
      id: 7,
     content: " 	Bharadwaj R, Munirathnam D, Sivabalan S. Immune Thrombocytopenic Purpura secondary to tuberculosis. ",
      place: " International Journal of Contemporary Pediatrics. 2018;5(5):2008",
    },
    {
      id: 8,
     content: "	Bharadwaj R, Suresh SG, Srinivasan A, Mohanrao S, Santosh V, Chidambaram B, Chandrasekhar S, Scott JX. Medulloblastoma molecular subtypes:Profile and outcomes from a tertiary care pediatric oncology unit in South India.  ",
      place: "Pediatric Hematology Oncology Journal. 2018;3(S7eS65):S49 ",
    },
    {
      id: 9,
     content: " 	Bharadwaj R, Srinivasan A, Scott JX. Clinico-biological profile of perinatal and infant Neuroblastoma; Experience from a tertiary care pediatric oncology centre. ",
      place: " Pediatric Hematology Oncology Journal. 2018;3(3):S54-5.",
    },
    {
      id:10 ,
     content: " 	Bharadwaj R, Ajeitha L, Revathi R, Deenadayalan M. Clinico-immunological profile of Primary Immunodeficiency Diseases at a tertiary care children’s hospital in South India.",
      place: " Pediatric Hematology Oncology Journal. 2018;3(3):S30-1. ",
    },
    {
      id:11 ,
     content: "	Bharadwaj R, Ajeitha L, Srinivasan A, Scott JX. Cytogenetic profile in children with B-Acute Lymphoblastic Leukemia and its correlation with induction outcomes.  ",
      place: " Pediatric Hematology Oncology Journal. 2018;3(3):S17-8",
    },
    {
      id:12 ,
     content: "Loganathan A, Srinivasan A, Kumar N, Bharadwaj R, Scott JX. Microbiological profile and outcomes of infections during induction therapy in childhood Acute Lymphoblastic Leukemia. ",
      place: " Pediatric Hematology Oncology Journal. 2017;2(2):S28.",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Works</span>
        <h3>Publications</h3>
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RishabPublication;
