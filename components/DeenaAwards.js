import { context } from "@/context/context";
import { useContext } from "react";

const DeenaAwards = () => {
 
  return (
    <div className="iknow_tm_affiliations">
    <div className="w-100 iknow_tm_main_title">
      <span>Awards</span>
      <h3 className="w-100">Achievements and Recognitions</h3>
    </div>

    <div className="affiliations">
      <ul>
        <li><img className="svg" src="/img/svg/dot.svg" alt="image" /><p >	2022: AB-PMJAY award from Govt. of Andhra Pradesh for performing maximum number of BMT for patients from AP under Aarogyasri scheme, in Tamil Nadu, with excellent outcomes. </p></li>
        <li><img className="svg" src="/img/svg/dot.svg" alt="image" /><p>	2023: Times Health award for Service Excellence in Paediatric Haematology/Oncology and BMT.</p></li>
      </ul>
    </div>
    </div>
  );
};
export default DeenaAwards;
