"use client";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(""); // Store the current path
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Set the current path once the component mounts
    setCurrentPath(window.location.pathname);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate states for each dropdown
  const [openDoctorsMenu, setOpenDoctorsMenu] = useState(false);
  const [openTreatmentsMenu, setOpenTreatmentsMenu] = useState(false);

  // Helper function to check if the current link is active
  const isActiveLink = (path) => currentPath === path;

  return (
    <div
      style={{
        backgroundColor: isScrolled ? "white" : "transparent",
        transition: "background-color 0.3s",
      }}
      className={isScrolled ? "iknow_tm_topbar navscrolllink" : "iknow_tm_topbar "}
      data-position="absolute"
    >
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="/">
              {darkLogo ? (
                <img src="/img/logo/logo.png" alt="logo" />
              ) : (
                <img src="/img/logo/logo.png" alt="logo" />
              )}
            </a>

            <nav className="navbar">
              <div className="container dum-con">
                <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  ☰
                </button>

                <div className={`menu-items ${mobileMenuOpen ? "menu-items-open" : ""}`}>
                  <Link href="/" className={`link ${isActiveLink("/") ? "active" : ""}`}>
                    Home
                  </Link>

                  {/* Doctors Dropdown */}
                  <div
                    className="dropdown"
                    onMouseEnter={() => setOpenDoctorsMenu(true)}
                    onMouseLeave={() => setOpenDoctorsMenu(false)}
                  >
                    <button style={{ fontSize: 17 }} className="dropdown-button">
                      Doctors
                    </button>
                    {openDoctorsMenu && (
                      <div className="dropdown-menu">
                           <Link
                          href="/deena"
                          className={`dropdown-item ${isActiveLink("/deena") ? "active" : ""}`}
                        >
                          Dr. M. Deenadayalan
                        </Link>
                        <Link
                          href="/vimal"
                          className={`dropdown-item ${isActiveLink("/vimal") ? "active" : ""}`}
                        >
                          Dr Vimal Kumar G
                        </Link>
                     
                        <Link
                          href="/rishab"
                          className={`dropdown-item ${isActiveLink("/rishab") ? "active" : ""}`}
                        >
                          Dr. Rishab Bharadwaj
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Treatments Dropdown */}
                  <div
                    className="dropdown"
                    onMouseEnter={() => setOpenTreatmentsMenu(true)}
                    onMouseLeave={() => setOpenTreatmentsMenu(false)}
                  >
                    <button style={{ fontSize: 17 }} className="dropdown-button">
                      Treatments
                    </button>
                    {openTreatmentsMenu && (
                      <div className="dropdown-menu">
                        <Link
                          href="/treatment/anaemia"
                          className={`dropdown-item ${isActiveLink("/treatment/anaemia") ? "active" : ""}`}
                        >
                          Anaemia
                        </Link>
                        <Link
                          href="/treatment/immune"
                          className={`dropdown-item ${isActiveLink("/treatment/immune") ? "active" : ""}`}
                        >
                          Immune
                        </Link>
                        <Link
                          href="/treatment/acute-leukaemia"
                          className={`dropdown-item ${isActiveLink("/treatment/acute-leukaemia") ? "active" : ""}`}
                        >
                          Acute Leukaemia
                        </Link>
                        <Link
                          href="/treatment/aplastic-anaemia"
                          className={`dropdown-item ${isActiveLink("/treatment/aplastic-anaemia") ? "active" : ""}`}
                        >
                          Aplastic Anaemia
                        </Link>
                        <Link
                          href="/treatment/blood-and-marrow-transplantation"
                          className={`dropdown-item ${isActiveLink("/treatment/blood-and-marrow-transplantation") ? "active" : ""}`}
                        >
                          Blood Marrow transplantation
                        </Link>
                        <Link
                          href="/treatment/itp"
                          className={`dropdown-item ${isActiveLink("/treatment/itp") ? "active" : ""}`}
                        >
                          ITP
                        </Link>
                        <Link
                          href="/treatment/thalassaemia"
                          className={`dropdown-item ${isActiveLink("/treatment/thalassaemia") ? "active" : ""}`}
                        >
                          Thalassaemia
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link href="/articles" className={`link ${isActiveLink("/articles") ? "active" : ""}`}>
                    Articles
                  </Link>
                  <Link href="/gallery" className={`link ${isActiveLink("/gallery") ? "active" : ""}`}>
                    Gallery
                  </Link>
                  <Link href="/contact" className={`link ${isActiveLink("/contact") ? "active" : ""}`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="right">
            {/* {topbarIcon && <SocialIcons />} */}
            <div className="iknow_tm_button">
              <a href="#" download>
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
