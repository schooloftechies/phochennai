import { context } from "@/context/context";
import { useContext } from "react";

const Blog = () => {
  const publications = [
    {
      id: 1,
      content: " 	‘A Single Centre Experience of Effective Desensitization Strategy for Children with High Anti-HLA Donor-Specific Antibodies Undergoing Haploidentical Hematopoietic Stem Cell Transplantation’ ",
      place: " Indian J Hematol Blood Transfus (2023). ",
    },
    {
      id: 2,
      content: "	‘Clinical Profile of Hepatitis Associated Aplastic Anemia (HAAA) in Six Children’",
      place: "Indian Pediatrics volume 60, pages410–411 (2023)  ",
    },
    {
      id: 3,
      content: "	‘Outcomes of liver transplantation in children with Langerhans cell histiocytosis: Experience from a quaternary care center’",
      place: " Pediatr Blood Cancer. 2023; 70: e30024",
    },

    {
      id:4 ,
      content: "‘Graft-Versus-Host Disease in Pediatric Living Donor Liver Transplant’ ",
      place: "Exp Clin Transplant. 2022 Dec; 20(12):1137-1140 ",
    }, 
    {
      id: 5,
      content: "	‘CARMIL2 Immunodeficiency with Epstein Barr Virus Associated Smooth Muscle Tumor (EBV-SMT). Report of a Case with Comprehensive Review of Literature. Fetal and Pediatric Pathology’ ",
      place: " 2022 Dec;41(6):1023-1034",
    },
    {
      id: 6,
      content: " ‘Hereditary Non-Spherocytic Hemolytic Anemia (HNSHA): Case reports of Rare Hereditary Red Cell Enzymopathies’  ",
      place: "Indian Pediatr 2021;58: 993-994 ",
    },
    {
      id: 7,
      content: " Indian Pediatrics 2021 Mar 15;58(3):285-286 ",
      place: "	‘Varied Clinical Manifestations of LRBA Deficiency (Immune Dysregulation Disorder)’ ",
    },
    {
      id: 8,
      content: " ‘Non-Malignant Lymphoproliferative Disorders in Children: A case series’ – Indian Journal of Hematology and Blood Transfusion,  ",
      place: "2021 Jan; 37(1):152-156. ",
    },
    {
      id: 9,
      content: " ‘Diagnostic spectrum and clinical profile of Primary Immunodeficiency Disorders at a tertiary care children hospital in South India’ ",
      place: "Indian Pediatrics 2021 Mar 15;58(3):246-249 ",
    },
    {
      id:10 ,
      content: "‘Outcomes for high-risk hepatoblastoma in a resource-challenged setting’ ",
      place: " BJS open 2020; 4: 630–636",
    },
    {
      id:11 ,
      content: "‘Multidisciplinary management of hepatoblastoma in children: Experience from a developing country’ ’ ",
      place: "Pediatric Blood and Cancer, 2017; 64: e26249",
    },
    {
      id:12 ,
      content: "‘Extensive nail changes in a toddler with multisystemic Langerhans cell histiocytosis ",
      place: "Pediatric Dermatology, 2017;34:732-734",
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
export default Blog;
