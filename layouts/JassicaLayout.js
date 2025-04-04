"use client";

import CopyRightText from "@/components/CopyRightText";
import TopBar from "@/components/TopBar";
import Jessica from "@/components/hero/Jessica";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes1 } from "@/utility/shapes";
import { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
const JassicaLayout = ({ darkLogo }) => {
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
    iKnowUtilits.menuHoverEffect();
  }, []);

  const { pageContent, menus } = useContext(context);

  // Set initial state to the first menu item's sectionId
  const [activeNav, setActiveNav] = useState(pageContent[0]?.sectionId || null);
  const [copyRightClass, setCopyRightClass] = useState("hidden");

  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} />
      {/* Jassica Hero */}
      <Jessica
        shapes1={shapes1}
        menus={menus}
        setActiveNav={setActiveNav}
        activeNav={activeNav}
        setCopyRightClass={setCopyRightClass}
      />
      {/* Content */}
      <div className="container">
        <div
          className={`iknow_tm_mainpart ${activeNav !== null ? "opened" : ""}`}
        >
          {pageContent.map((content) => (
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

export default JassicaLayout;
