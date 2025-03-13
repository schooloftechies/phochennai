import { context } from "@/context/context";
import { useContext } from "react";

const RishabAbout = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url="/img/hero/avatar2.jpg" />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>Dr. Rishab Bharadwaj  </span>
              </li>
              <li>
                <h3>Postion</h3>
                <span>Consultant </span>
              </li>
              
              <li>
                <h3>Mail</h3>
                <span>rishab11@gmail.com</span>
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
          <p>
          Dr. Rishab Bharadwaj is a distinguished Paediatric Haematologist and Oncologist. With 7 years of experience in tertiary and quaternary care Paediatric Haematology & Oncology units across Chennai and the UK, he has honed his skills in providing top-notch care to young patients.
          <br/><br/>
He received specialized training at St. Mary’s Hospital in London, UK, a pioneer centre for haploidentical transplantation for haematological disorders in the UK. This training has equipped him with advanced expertise in the field, particularly in performing over 300 Allo- geneic and Autologous Stem Cell transplants.
<br/><br/>
He is an expert in benign and malignant haematology, solid tumours, immunodeficiencies and bone marrow transplants. His special interest lies in cellular and immunotherapy, where he applies innovative techniques to improve patient outcomes. His dedication to advancing medical care and his compassionate approach make him a valued professional in the medical community.

He is strongly focussed on academic pursuits and has numerous publications to his credit in various indexed journals.
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default RishabAbout;
