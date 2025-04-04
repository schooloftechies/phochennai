"use client";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Margarine } from "next/font/google";
import { Whatsappfab } from "@/components/Whatsappfab";
const Home = () => {
  const testimonials = [
    {
      videoUrl: "https://www.youtube.com/embed/mKid145mwxM?si=6AJqflYUXjkAQf5L",

    },
    {
      videoUrl: "https://www.youtube.com/embed/zC67wgCEJPg?si=ipiu06dBw40IPfEu",
   
    },
    
    // {
    //   name: "Jane Smith",
    //   text: "I've never had a better experience. Exceptional quality!",
    //   image: "/img/about/familyd.png",
    // },
    // {
    //   name: "Mike Johnson",
    //   text: "A fantastic service that exceeded all my expectations.",
    //   image: "/img/about/familyd.png",
    // },
  ];

  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  useEffect(() => {
    const updateUnderline = () => {
      const activeTabElement = document.querySelector(".navtab.active");
      const underline = document.querySelector(".underline");
      if (activeTabElement && underline) {
        underline.style.width = `${activeTabElement.offsetWidth}px`;
        underline.style.left = `${activeTabElement.offsetLeft}px`;
      }
    };
    window.addEventListener("resize", updateUnderline);
    updateUnderline();

    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeTab]);

  return (
    <div>
      <TopBar />

      {/* banner start */}
      <div className="home_banner">
        <div className="container">
          <div className="Home_banner_left">
            <h1>Because every child deserves the best</h1>
            <p>
              {" "}
              Our team includes skilled physicians and nurses who understand the
              special needs of these children and provide them with
              comprehensive, compassionate care from diagnosis to complete cure
            </p>
            <div className="iknow_tm_button">
              <a href="#">Make Appoinment</a>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      <Whatsappfab></Whatsappfab>

      {/* about start */}

      <div className="defalut_section about-padding">
        <div className="container">
          <div className="about">
            <div className="about_left">
              <img src="/img/about/img8.jpg" />
              <img src="/img/about/medical.png" />
            </div>
            <div className="about_right">
              {/* <span>About Us</span> */}
              <h2>About Us</h2>
              <p>
                We at PHO, offers a holistic care in diagnosis, treatment and
                prevention of all blood related disorders and cancers in
                children, adolescents, and young adults. Our team includes
                skilled physicians and nurses who understand the special needs
                of these children and provide them with comprehensive,
                compassionate care from diagnosis to complete cure.We offer
                comprehensive care in the treatment of the following disorders-{" "}
              </p>
              <ul>
                <li>
                  <img className="svg" src="/img/svg/dot.svg" />
                  Haematology
                </li>
                <li>
                  <img className="svg" src="/img/svg/dot.svg" />
                  Oncology
                </li>
                <li>
                  <img className="svg" src="/img/svg/dot.svg" />
                  Immunology
                </li>
                <li>
                  <img className="svg" src="/img/svg/dot.svg" />
                  Bone Marrow (Stem Cell) Transplantation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      <div className="defalut_section gray-bg">
        <div className="container">
          <div className="title_section">
            <span>We offer </span>
            <h2>Our Services</h2>
            <img src="/img/about/title-line.png" />
          </div>
          {/* Tab navigation */}
          <div className="navtabs">
            <div
              className={`navtab ${activeTab === "home" ? "active" : ""}`}
              onClick={() => handleTabClick("home")}
            >
              Paediatric Haematology
            </div>
            <div
              className={`navtab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => handleTabClick("about")}
            >
              Paediatric Oncology
            </div>
            <div
              className={`navtab ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => handleTabClick("contact")}
            >
              Paediatric Immunology
            </div>
            <div
              className={`navtab ${activeTab === "page4" ? "active" : ""}`}
              onClick={() => handleTabClick("page4")}
            >
              Bone Marrow (Stem Cell) Transplantation and Cellular Therapy
            </div>

            <div className="underline"></div>
          </div>

          {/* Content sections */}
          <div
            className={`content ${activeTab === "home" ? "active" : ""}`}
            id="home"
          >
            <h4 style={{ marginTop: "16px" }}>Anaemia</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Nutritional: iron, vitamin B12, or folate deficiency
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Haemolytic: thalassemia, sickle cell anaemia
              </li>
            </ul>
            <h4 style={{ marginTop: "16px" }}>Platelet Disorders</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Thrombocytopenia (low platelet count): ITP
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Platelet function disorders
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Bone Marrow Failure</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Aplastic anaemia (inherited or acquired)
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Bleeding Disorders</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                von Willebrand disease
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Other clotting factor deficiencies
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Clotting Disorders</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Haemophilia A and B Rare Blood Conditions
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Langerhans cell histiocytosis Hemophagocytic lymphohistiocytosis
              </li>
            </ul>
          </div>

          <div
            className={`content ${activeTab === "about" ? "active" : ""}`}
            id="about"
          >
            <h3></h3>
            <h4 style={{ marginTop: "16px" }}>Blood Cancers</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Acute lymphoblastic leukaemia (ALL)
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Acute myeloid leukaemia (AML)
              </li>

              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Other leukaemias
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Lymphomas</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Hodgkin's lymphoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Non-Hodgkin's lymphoma
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Solid Tumours</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Bone: Ewing's sarcoma, Osteosarcoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Liver: Hepatoblastoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Kidney: Nephroblastoma (Wilm's tumour)
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Nerve tissue: Neuroblastoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Muscle: Rhabdomyosarcoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Other soft tissue sarcomas
              </li>
            </ul>

            <h4 style={{ marginTop: "16px" }}>Other Cancers</h4>
            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Germ cell tumours
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Brain tumours
              </li>
            </ul>
          </div>
          {/*  */}

          <div
            className={`content ${activeTab === "contact" ? "active" : ""}`}
            id="contact"
          >
            <h3>Inborn errors of immunity</h3>

            <ul style={{ marginTop: "8px" }}>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Severe Combined Immunodeficiency
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Chronic Granulomatous Disease
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Hyper IgM syndrome
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Familial HLH
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Leucocyte Adhesion Defects
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Immune Dysregulation syndromes
              </li>
            </ul>
          </div>
          <div
            className={`content ${activeTab === "page4" ? "active" : ""}`}
            id="page4"
          >
            <p>
              All BMT patients are treated in a safe and private environment in
              state of the art HEPA filtered rooms at MGM Healthcare.{" "}
            </p>
            <div className="tab_cards">
              <div className="obj_card">
                <h3>We offer all types of transplantation</h3>
                <ul>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>
                      Allogenic stem cell transplantation using matched related
                      donors
                    </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>
                      {" "}
                      Allogenic stem cell transplantation using matched
                      unrelated donors
                    </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>
                      Allogenic stem cell transplantation using haploidentical
                      (half-matched) donors
                    </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p> Allogenic unrelated cord blood transplantation </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Autologous stem cell transplantation</p>
                  </li>
                </ul>
              </div>
              <div className="obj_card">
                <h3>Cancerous conditions</h3>
                <ul>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>
                      {" "}
                      Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia.
                    </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Hodgkin's and Non-Hodgkin's Lymphoma</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Myelodysplastic syndrome</p>
                  </li>
                </ul>
              </div>

              <div className="obj_card">
                <h3>Non-cancerous conditions</h3>
                <ul>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p> Haemoglobinopathies like Thalassemia Major,</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p> Sickle cell anaemia</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Congenital Immune deficiencies </p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Severe Aplastic Anaemia</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Inherited aplastic anaemias like like Fanconi</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Anaemia</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Inherited Metabolic disorders</p>
                  </li>
                </ul>
              </div>

              <div className="obj_card">
                <h3>Cellular Therapy</h3>
                <ul>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p> CAR T-cell therapy</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p> Immunotherapy</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="defalut_section ">
        <div className="container">
          <div className="title_section">
            <span>Objectives</span>
            <h2>PHO Chennai Objectives</h2>
            <img src="/img/about/title-line.png" />
          </div>

          <div className="obj_cards">
            <div className="obj_card">
              <h3>Deliver Comprehensive, Patient-Centered Care</h3>
              <p>
                Provide compassionate, evidence-based care to pediatric patients
                with hematologic and oncologic conditions, ensuring the
                physical, emotional, and psychosocial needs of the child their
                family are met.
              </p>
            </div>

            <div className="obj_card">
              <h3>Enhance Diagnostic and Treatment Protocols</h3>
              <p>
                Implement, innovate and refine diagnostic methods, treatment
                plans, and protocols continuously, and provide the latest
                cutting edge treatment in Stem Cell Transplantation,
                Immunotherapy and Cellular therapy.{" "}
              </p>
            </div>

            <div className="obj_card">
              <h3>Foster Multidisciplinary Collaboration</h3>
              <p>
                Collaborate effectively with specialists in PICU, Pediatric
                Surgery, Radiation Oncology, Nuclear Medicine etc to ensure
                coordinated, holistic care for pediatric patients from diagnosis
                through treatment and long-term follow-up.
              </p>
            </div>

            <div className="obj_card">
              <h3>Advance Research and Clinical Trials</h3>
              <p>
                Participate in and contribute to cutting-edge research and
                clinical trials aimed at discovering new therapies, improving
                existing treatments, and advancing the understanding of these
                diseases.
              </p>
            </div>

            <div className="obj_card">
              <h3>Provide Education and Support</h3>
              <p>
                Educate patients, families, and the wider community about
                pediatric blood disorders, cancers and stem cell transplantation
                while offering emotional support, counseling, and resources to
                assist in managing the impact of these conditions.
              </p>
            </div>

            <div className="obj_card">
              <h3>Ensure Continuous Professional Development</h3>
              <p>
                Stay updated on the latest advancements in pediatric hematology
                and oncology, to maintain the highest standard of care.
              </p>
            </div>
          </div>
          {/* <div className="obj_card">
              <h3>Promote Preventive and Early Detection Strategies</h3>
              <p>
                Advocate for early detection, prevention, and intervention
                strategies, working with public health initiatives to reduce the
                burden of these diseases.{" "}
              </p>
            </div> */}
        </div>
      </div>

      {/* <section className="testimonialSection">
        <div className="container">
          <div className="title_section">
            <span>Testimonials</span>
            <h2>What Our Patients Say</h2>
            <img src="/img/about/title-line.png" />
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  // When the viewport width is >= 0px, show 1 slide
                  0: {
                    slidesPerView: 1,
                  },
                  // When the viewport width is >= 768px, show 3 slides
                  768: {
                    slidesPerView: 1,
                  },
                }}
                className="swiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="slide">
                    <div className="card">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}'s photo`}
                        className="test_image"
                      />
                      <p className="text">{testimonial.text}</p>
                      <h3 className="name">{testimonial.name}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

<section className="testimonialSection">
      <div className="container">
        <div className="title_section">
          <span>Testimonials</span>
          <h2>What Our Patients Say</h2>
          <img src="/img/about/title-line.png" alt="Title Line" />
        </div>

        <div className="testimonial-wrapper">
          {/* Left Column: Image */}
          <div className="left-column">
          <img className="ownimg" src="/img/testimonials/pho.jpg" />
          </div>

          {/* Right Column: Swiper with YouTube Videos */}
          <div className="right-column">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={40}
              navigation
              pagination={{ clickable: true }}
              className="swiper"
              breakpoints={{
                // When the viewport width is >= 0px, show 1 slide
                0: {
                  slidesPerView: 1,
                },
                // When the viewport width is >= 768px, show 3 slides
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="slide">
                  <div className="card">
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="250"
                        src={testimonial.videoUrl}
                        title={testimonial.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="name">{testimonial.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* CSS for Layout and Responsiveness */}
      <style jsx>{`

     
        .testimonial-wrapper {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .left-column {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .testimonial-image {
          width: 100%;
          max-width: 500px;
          border-radius: 10px;
        }

        .right-column {
          flex: 1;
          min-width: 300px;
        }

        @media (max-width: 768px) {
          .testimonial-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .left-column,
          .right-column {
            width: 100%;
          }
        }
      `}</style>
    </section>

      {/* Existing content */}

      <div className="cta_area">
        <div className="container">
          <div className="title_section">
            <span>Stay healthy & strong to enjoy life</span>
            <h2>
              Trusted experts in pediatric hematology-oncology, ensuring
              compassionate care
            </h2>
            <div className="iknow_tm_button">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
