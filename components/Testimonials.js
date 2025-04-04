import { context } from "@/context/context";
import { useContext } from "react";

const Testimonials = () => {
  const publications = [
    {
      id: 1,
      content: "Efficacy of Plerixafor in CD34+ stem cell mobilization in healthy paediatric stem cell donors ",
      place: "50th EBMT meeting held at Glasgow",
      date:"UK in May 2024",
    },
    {
      id: 2,
      content: " CD45RO cells addback in TCR αβ/CD45RA depleted haploidentical HSCT leads to superior outcomes in infants with Inborn Errors of Immunity: experience from a developing country!",
      place: " 50th EBMT meeting held at Glasgow ",
      date:" UK in May 2024 ",
    },
    {
      id: 3,
      content: " Clinical profile and treatment outcomes of Hepatoblastoma – 10-year experience from a developing country",
      place: " SJVF 2023 (17th St Jude Viva Forum) ",
      date:"Singapore in March 2023 ",
    },
    {
      id: 4,
      content: " Clinical profile, multidisciplinary management and treatment outcomes of hepatoblastoma in children – single centre experience from a developing country’ ",
      place: "5th Emirates Pediatric Hematology Oncology Conference ",
      date:"Abu Dhabi, UAE in January 2023  ",
    },
    {
      id: 5,
      content: "Clinical profile and treatment outcomes of Hepatoblastoma – 10-year experience from a developing country",
      place: "SIOP 2019 (51st Congress of International Society of Paediatric Oncology)  ",
      date:"Lyon, France in October 2019 ",
    },
    {
      id: 6,
      content: " Role of adjuvant chemotherapy post liver transplantation in Hepatoblastoma – necessity and feasibility",
      place: "PHOCON ",
      date:"Bengaluru in December 2018",
    },
    {
      id: 7,
      content: "Role of Liver Transplantation in Hepatoblastoma – Experience from a Developing Country’",
      place: "St Jude Viva Forum",
      date:", Singapore 2017",
    },
    {
      id: 8,
      content: "Multidisciplinary management of Hepatoblastoma with incorporation of Liver Transplantation in children",
      place: " PHOCON",
      date:"Mumbai in November 2016",
    },
    {
      id: 9,
      content: "Irinotecan as a maintenance therapy in relapsed Hepatoblastoma-a case report",
      place: "PHOCON ",
      date:"Mumbai in November 2016",
    },
    {
      id: 10,
      content: "Syndrome of inappropriate antidiuretic hormone secretion complicating umbilical cord stem cell transplantation",
      place: "APBMT",
      date:"October 2012 at Hyderabad, India",
    },
    {
      id: 11,
      content: "Use of unrelated peripheral blood stem cells from the Indian donor registry to cure childhood haematological conditions",
      place: "APBMT ",
      date:"October 2012 at Hyderabad, India",
    },
    {
      id: 12,
      content: "Infection related mortality during induction therapy of childhood Acute Lymphoblastic Leukemia in a tertiary care centre in South India",
      place: " PHOCON ",
      date:"Ludhiana in November 2012",
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
export default Testimonials;
