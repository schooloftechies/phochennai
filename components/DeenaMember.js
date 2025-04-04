import { context } from "@/context/context";
import { useContext, useState } from "react";

const DeenaMember = () => {
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
        <span>Memberships</span>
        <h3 className="w-100">Professional Memberships</h3>
      </div>

      <div className="affiliations">
        <ul>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Indian Academy of Paediatrics (Life member)</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Paediatric Haematology and Oncology Chapter – IAP (Life member)</li>
        </ul>
      </div>

      <div className="w-100 iknow_tm_main_title">
        <h3 className="w-100">Authored textbook chapters</h3>
      </div>

      <div className="affiliations">
        <ul>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Acute Lymphoblastic Leukaemia. PG Textbook of Pediatrics. 1st ed. Jaypee Brothers;. p.2420-2426.</li>
          <li><img className="svg" src="/img/svg/dot.svg" alt="image" />Megaloblastic anemia. IAP Standard Treatment Guidelines 2022. </li>
        </ul>
      </div>

      </div>
  );
};
export default DeenaMember;
