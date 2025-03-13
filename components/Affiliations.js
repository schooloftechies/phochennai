import { context } from "@/context/context";
import { useContext, useState } from "react";

const Affiliations = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [active, setActive] = useState("all");
  const activeLi = (value) => (active == value ? "current" : "");
  const activeContent = (value) => {
    return active === "all" || active === value ? "show" : "hidden";
  };

  const handelClick = (value, e) => {
    e.preventDefault();
    // First, set the "active" state to hide all items
    setActive("none");
    // Then, after a brief delay, set it to show all items
    setTimeout(() => {
      setActive(value);
    }, 0);
  };

  return (
    <div className="iknow_tm_affiliations">
      <div className="w-100 iknow_tm_main_title">
        <span>Affiliations</span>
        <h3 className="w-100">Professional Affiliations</h3>
      </div>

      <div className="affiliations">
        <ul>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Royal College of Paediatrics and Child Health (RCPCH), UK</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />International Society of Paediatric Oncology (SIOP)</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />European Blood and Marrow Transplantation (EBMT)</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Indian Society of Blood and Marrow Transplantation (ISBMT)</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Indian Academy of Pediatrics (PHO subchapter)</li>
        </ul>
      </div>
      </div>
  );
};
export default Affiliations;
