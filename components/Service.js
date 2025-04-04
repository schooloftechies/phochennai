import { context } from "@/context/context";
import { useContext } from "react";

const Service = () => {
 
  return (
    <div className="iknow_tm_affiliations">
    <div className="w-100 iknow_tm_main_title">
      <span>Awards</span>
      <h3 className="w-100">Achievements and Recognitions</h3>
    </div>

    <div className="affiliations">
      <ul>
        <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Won Late Dr. Puneet Sharma GOLD MEDAL issued by the India Health Trust for the Best Outgoing Student of the year 2010 in MD Pediatrics</li>
        <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Won Silver medal in RajPedicon 2009 held on 24-25 October at Jaipur for oral paper presentation</li>
        <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Came first in the NNF PG Quiz in Neonatology in the Divisional Round held at Government Medical College, Kota on 25-08-2009</li>
      </ul>
    </div>
    </div>
  );
};
export default Service;
