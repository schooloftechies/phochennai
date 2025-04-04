import { context } from "@/context/context";
import { useContext } from "react";

const DeenaPresentation = () => {
  const publications = [
    {
      id: 1,
      content: "Clinico- immunological profile of primary immunodeficiency disease in Teritary care children hospital  ",
      place: "in South India in 3rd Asia Pacific society for immunodeficiencies ",
      date: " Chandigarh, India",
    },
    {
      id: 2,
      content: "Autolymphoproliferative like presentation in a child with Novel LRBA defect in South India",
      place: " 3rd Asia Pacific society for immunodeficiencies",
      date: " Chandigarh, India",
    },
    {
      id: 3,
      content: "Evans syndrome as a primary presentation of a novel WAS mutant Wiskott Aldrich Syndrome in South India ",
      place: " 3rd Asia Pacific society for immunodeficiencies",
      date: " Chandigarh",
    },
    {
      id: 4,
      content: "LRBA mutation- Single center experience and literature in South India",
      place: " in 3rd Asia Pacific society for immunodeficiencies",
      date: " - Chandigarh, India",
    },
    {
      id: 5,
      content: "Clinico-immunological profile of primary immunodeficiency diseases at a tertiary care children’s hospital in South India ",
      place: " PHOCON ",
      date: "2018, Bengaluru  ",
    },
    {
      id: 6,
      content: "A descriptive analysis of primary immunodeficiencies in a children’s hospital in Southern India in ",
      place: " CIDSCON  ",
      date: " 2018, Vellore.",
    },
    {
      id: 7,
      content: "Hemophagocytic lymphohistiocytosis in children: a single center experience. ",
      place: "Tamil Nadu State Conference ",
      date: "TRY PEDICON 2018 ",
    },
    {
      id: 8,
      content: "Multidisciplinary management of hepatoblastoma in children – Experience from South India ",
      place: " PHOCON ",
      date: " 2016, Pune",
    },
    {
      id: 9,
      content: "Irinotecan as a maintenance therapy in relapsed Hepatoblastoma-a case report",
      place: " PHOCON",
      date: " Mumbai in November 2016",
    },
    {
      id: 10,
      content: "	Role of Liver Transplantation in Hepatoblastoma – Experience from a Developing Country ",
      place: " St Jude Viva Forum",
      date: " Singapore 2017",
    },
    {
      id: 11,
      content: "	Childhood Relapsed Acute Lymphoblastic Leukaemia – Outcome Analysis from a Single Centre   10th ST.JUDE VIVA forum. ",
      place: " Paediatric Oncology ",
      date: " Singapore  2016",
    },
    {
      id: 12,
      content: "12.	Haematopoietic Stem Cell Transplantation for Childhood Acute Lymphoblastic Leukaemia  - A Single Centre Experience ",
      place: " 10th ST.JUDE VIVA forum",
      date: " Paediatric Oncology Singapore  2016 ",
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
export default DeenaPresentation;
