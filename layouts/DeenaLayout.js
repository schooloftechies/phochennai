"use client";
import CopyRightText from "@/components/CopyRightText";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Deena from "@/components/hero/Deena";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes1 } from "@/utility/shapes";
import { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";

const DeenaLayout = ({ darkLogo }) => {
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
    iKnowUtilits.menuHoverEffect();
  }, []);
  
  const { pageContent1,menus1 } = useContext(context);

  const [activeNav, setActiveNav] = useState(pageContent1[0]?.sectionId || null);
  const [copyRightClass, setCopyRightClass] = useState("hidden");
  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} />
      {/* Deena Hero */}
      <Deena
        shapes1={shapes1}
        menus={menus1}
        setActiveNav={setActiveNav}
        activeNav={activeNav}
        setCopyRightClass={setCopyRightClass}
      />
   {/* Content */}
   <div className="container">
        <div
          className={`iknow_tm_mainpart ${activeNav !== null ? "opened" : ""}`}
        >
          {pageContent1.map((content) => (
            <div
              className={`iknow_tm_main_section ${
                content.sectionId === activeNav ? "active" : ""
              }`}
              key={content.id}
            >
              {content.component}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default DeenaLayout;
