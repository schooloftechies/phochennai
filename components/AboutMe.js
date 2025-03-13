import { context } from "@/context/context";
import { useContext } from "react";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url={aboutData.img} />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>{aboutData.name}</span>
              </li>
              <li>
                <h3>Postion</h3>
                <span>{aboutData.nationality}</span>
              </li>
              
              <li>
                <h3>Mail</h3>
                <span>{aboutData.email}</span>
              </li>
             
              
              
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{aboutData.title}</h3>
        </div>
        {/* <div className="bigger_text">
          <p>{aboutData.subTitle}</p>
        </div> */}
        <div className="text">
          <p>Dr. Vimal Kumar is a compassionate and distinguished Paediatric Haematologist and Oncologist with more than 12 years of expertise in India and the UK, dedicated to providing exceptional care to children and adolescents with various types of cancers and blood disorders.

He received specialized training at St Mary’s Hospital, London, one of the pioneer centres in performing haploidentical BMTs and Gene therapy in UK. He has performed more than 500 Bone Marrow Transplantations till date.
<br/><br/>
His areas of expertise include comprehensive management of Childhood cancers (leukemia, lymphoma, solid tumours like brain tumors, hepatoblastoma, neuroblastoma etc.), Blood disorders, Immune deficiencies, BMT including complex T cell deplete haploidentical transplants and Cellular therapies.

Dr. Vimal has numerous publications in indexed national & international journals and has won accolades in presentations at various international forums. He is also a certified examiner for MRCPCH Clinical Examinations in India.</p>
        </div>
        <div className="iknow_tm_button">
          <a href="img/cv/1.jpg" download>
          Request Appoinment
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
