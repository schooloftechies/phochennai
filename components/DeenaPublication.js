import { context } from "@/context/context";
import { useContext } from "react";

const DeenaPublication = () => {
  const publications = [
    {
      id: 1,
      content: "A Single Centre Experience of Effective Desensitization Strategy for Children with High Anti-HLA Donor-Specific Antibodies Undergoing Haploidentical Hematopoietic Stem Cell Transplantation. ",
      place: " Indian Journal of Hematology and Blood Transfusion. 2023 Jun 20:1-5 ",
    },
    {
      id: 2,
      content: "Clinical Profile of Hepatitis Associated Aplastic Anemia (HAAA) in Six Children. ",
      place: "Indian Pediatrics. 2023 May;60(5):410-1. ",
    },
    {
      id: 3,
      content: "Pre-Transplant Immunosuppression for High Risk Thalassaemia: A Ray of Hope. ",
      place: "Indian Journal of Hematology and Blood Transfusion. 2023 Jan;39(1):161-2.",
    },

    {
      id:4 ,
      content: "Mendelian Susceptibility to Mycobacterial Disease Masquerading as Lymphoproliferative Disorder.  ",
      place: "Journal of Applied Hematology. 2020 Jul 1;11(3):145.",
    }, 
    {
      id: 5,
      content: "X-linked Lymphoproliferative Disease (XLP1) Presenting as Non-Epstein Barr Virus (EBV) - Related Hemophagocytic Lymphohistiocytosis (HLH). ",
      place: "Indian Pediatrics. 2020 Nov 15;57(11):1077-1078.",
    },
    {
      id: 6,
      content: "X-linked Lymphoproliferative Disease (XLP1) Presenting as Non-Epstein Barr Virus (EBV) - Related Hemophagocytic Lymphohistiocytosis (HLH). ",
      place: "Indian Pediatrics. 2020 Nov 15;57(11):1077-1078.",
    },
    {
      id: 7,
      content: "Clinical, Immunological, and Molecular Features of Severe Combined Immune Deficiency: A multi-institutional experience from India. ",
      place: "	Frontiers in immunology. 2021 Feb 8;11:619146.",
    },
    {
      id: 8,
      content: "The spectrum of clinical, immunological and molecular findings in Familial hemophagocytic lymphohistiocytosis (FHL)",
      place: "Frontiers in Immunology. 2021 Mar 5;12:612583.  ",
    },
    {
      id: 9,
      content: "Clinical, immunological, and molecular profile of Chronic Granulomatous Disease: A    multicentric study of 236 patients from India. ",
      place: "Frontiers in immunology. 2021 Feb 25;12:625320.",
    },
    {
      id:10 ,
      content: "Clinical and Genetic Spectrum of a Large Cohort of Patients With Leukocyte   Adhesion Deficiency Type 1 and 3: A Multicentric Study From India.  ",
      place: " Frontiers in Immunology. 2020 Dec 16;11:612703.",
    },
    {
      id:11 ,
      content: "Prolidase Deficiency in Very Early Onset Inflammatory Bowel Disease (VEO-IBD). Indian Journal of Pediatrics. ",
      place: "Indian Journal of Pediatrics. 2021 May;88:503-.",
    },
    {
      id:11 ,
      content: "Varied clinical manifestations of LRBA protein deficiency (Immune dysregulation disorder) – A case series.   ",
      place: " Indian Pediatrics. 2021 Mar;58:285-6.",
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
export default DeenaPublication;
