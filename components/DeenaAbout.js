import { context } from "@/context/context";
import { useContext } from "react";

const DeenaAbout = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url="/img/hero/avatar1.jpg" />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>Dr. M. Deenadayalan  </span>
              </li>
              <li>
                <h3>Postion</h3>
                <span>HOD and Clinical Lead</span>
              </li>
              
              <li>
                <h3>Mail</h3>
                <span>drdeenadayalanm@gmail.com</span>
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

          Dr. M. Deenadayalan is an esteemed Paediatric Haematologist and Oncologist known for his exceptional clinical skills and extensive experience in treating a range of paediatric conditions. With over 18 years in the field, he specializes in benign blood disorders, malignant haematology (including leukaemia and lymphoma), immunodeficiencies and solid tumours such as neuroblastoma, germ cell tumours, sarcoma, hepatoblastoma, and brain tumours.
          <br/><br/>
He has received training from prestigious institutions across the world in Taiwan, UK, and USA. He has been instrumental in setting up Bone Marrow Transplant units in 4 different hospitals and performing more than 700 Allogeneic and Autologous Stem Cell Transplants to date. He has a vision of incorporating Cellular and Immunotherapy into routine clinical practice.
<br/><br/>
His dedication to advancing medical care and his compassionate approach make him a respected figure in the medical community and a trusted healthcare provider for his patients and their families. The goal of his team is curative and compassionate care at an affordable cost.
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default DeenaAbout;
