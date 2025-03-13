"use client";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
const Home = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This service is amazing! I highly recommend it to everyone.",
      image: "/img/about/familyd.png",
    },
    {
      name: "Jane Smith",
      text: "I've never had a better experience. Exceptional quality!",
      image: "/img/about/familyd.png",
    },
    {
      name: "Mike Johnson",
      text: "A fantastic service that exceeded all my expectations.",
      image: "/img/about/familyd.png",
    },
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
            <h1>Because every child deserves the best
            </h1>
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

      {/* about start */}

      <div className="defalut_section about-padding" >
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
              Haematology
            </div>
            <div
              className={`navtab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => handleTabClick("about")}
            >
              Oncology
            </div>
            <div
              className={`navtab ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => handleTabClick("contact")}
            >
              Immunology
            </div>
            <div
              className={`navtab ${activeTab === "page4" ? "active" : ""}`}
              onClick={() => handleTabClick("page4")}
            >
              Bone Marrow (Stem Cell) Transplantation
            </div>
           
            <div className="underline"></div>
          </div>

          {/* Content sections */}
          <div
            className={`content ${activeTab === "home" ? "active" : ""}`}
            id="home"
          >
            <ul>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Anaemia nutritional like iron deficiency, vitamin B12 and folate
                deficiency
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Haemolytic anaemias like thalassemia, sickle cell anaemia
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Thrombocytopenia ITP, platelet function disorders Aplastic
                anaemia inherited, acquired
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Bleeding disorders including von Willebrand disease Clotting
                disorders like haemophilia
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Langerhans cell histiocytosis
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Hemophagocytic lymphohistiocytosis
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Other blood disorders
              </li>
            </ul>
          </div>
          <div
            className={`content ${activeTab === "about" ? "active" : ""}`}
            id="about"
          >
            <ul>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Leukemias like Acute lymphoblastic leukaemia, Acute myeloid
                leukaemia ete
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Lymphomas-Hodgkin's and Non Hodgkin's lymphoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Bone tumours - Ewing's sarcoma, Osteosarcoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Hepatoblastoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Nephroblastoma (Wilm's tumour)
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Neuroblastoma
              </li>
              <li>
                <img className="svg" src="/img/svg/dot.svg" />
                Rhabdomyosarcoma and other soft tissue sarcomas
              </li>
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
          <div
            className={`content ${activeTab === "contact" ? "active" : ""}`}
            id="contact"
          >
            <p>
              We offer complete evaluation of children with recurrent
              infections, full range of immunological testing and management of
              immune deficiencies including Severe Combined Immune Deficiency
              (SCID), agammaglobulinemia etc.
            </p>
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
                    <p>Allogenic stem cell transplantation using matched related donors</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>	Allogenic stem cell transplantation using matched unrelated donors</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Allogenic stem cell transplantation using haploidentical (half-matched) donors</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>	Allogenic unrelated cord blood transplantation </p>
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
                    <p>	Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia.</p>
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
                    <p>	Haemoglobinopathies like Thalassemia Major,</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>	Sickle cell anaemia</p>
                  </li>
                  <li>
                    <img className="svg" src="/img/svg/dot.svg" />
                    <p>Congenital Immune deficiencies  </p>
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
                    <p>nherited Metabolic disorders</p>
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
                  physical, emotional, and psychosocial needs of the child
                  their family are met.
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
      
      <section className='testimonialSection'>
      <div className="container">
      <div className="title_section">
            <span>Testimonials</span>
            <h2>What Our Patients Say</h2>
            <img src="/img/about/title-line.png" />
          </div>

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
           slidesPerView: 3,
         },
       }}
        className='swiper'
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='slide'>
            <div className='card'>
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className='test_image'
              />
              <p className='text'>{testimonial.text}</p>
              <h3 className='name'>{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
      {/* Existing content */}

      <div className="cta_area">

        <div className="container">
          <div className="title_section">
            <span>Stay healthy & strong to enjoy life</span>
            <h2>Trusted experts in pediatric hematology-oncology,
              ensuring compassionate care</h2>
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
