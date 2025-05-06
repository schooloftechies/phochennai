"use client";
import styles from "../../public/css/post.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Margarine } from "next/font/google";
import { Whatsappfab } from "@/components/Whatsappfab";
export default async function Anamaya() {
    const testimonials = [
        {
            name: "Dr. M. Deenadayalan",
             text: "HOD and Clinical Lead",
             image: "/img/hero/avatar1.jpg",
        },
        {
            name: "Dr Vimal Kumar G",
             text: "Senior Consultant",
             image: "/img/hero/avatar.jpg",
        },
        {
            name: "Dr. Rishab Bharadwaj",
             text: "Consultant",
             image: "/img/hero/avatar2.jpg",
        },
      ];
    
  return (
    <>
      <TopBar />

      <div className="post_bannerr">
        <div className="container">
          <h1>
            Every child deserves a chance at life.
            <br /> Together, let's make it happen!
          </h1>
        </div>
      </div>

      {/* about start */}

      <div className="defalut_section about-padding">
        <div className="container">
          <div className="about">
            <div className="about_left">
              <img style={{ position: "static" }} src="/img/about/aabout.png" />
            </div>
            <div className="about_right">
              {/* <span>About Us</span> */}
              <h2 style={{ margin: 0 }}>About Us</h2>
              <p>
                “Anamaya”, derived from Sanskrit refers to “disease free". Building on this premise, Anamaya Children's Trust was established
                as a not for profit foundation with the primary aim of offering
                financial aid to children who need to undergo curative
                treatment such as:
              </p>
              <ul>
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <img
                    style={{ position: "relative", top: "7px" }}
                    className="svg"
                    src="/img/svg/dot.svg"
                  />
                  <p>
                    Paediatric oncological care  including chemotherapy, radio therapy and other procedures.
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <img
                    style={{ position: "relative", top: "7px" }}
                    className="svg"
                    src="/img/svg/dot.svg"
                  />
                  <p>
                    {" "}
                    Haematopoietic stem cell transplants (aka bone marrow transplants) to cure relapsed blood cancers (leukemias),
                    aggressive solid organ tumours, haemoglobin disorders such
                    as thalassamia or sickle cell anaemia, primary immune
                    deficiencies, etc.
                  </p>
                </li>
              </ul>
              <p>
                Haematopoietic stem cell transplants (aka bone marrow transplants) to cure relapsed blood cancers (leukemias), aggressive
                solid organ tumours, haemoglobin disorders such as thalassaemia or sickle cell anaemia, primary immune deficiencies, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}

      <div className="defalut_section" style={{ padding: 0 }}>
        <div className="container">
          <div className="title_section">
            <h2 style={{ margin: 0 }}>Why Anamaya Children's Trust?</h2>
            <p>Here are some startling numbers in today's day and age:</p>
            <img src="/img/about/title-line.png" />
          </div>

          <div className="obj_cardss">
            <div className="obj_card">
              <p>
                Every year, more than 50000 cases of childhood cancer are
                diagnosed in India. Although survival rates for these children
                have improved dramatically over the past few years whereby up to
                85% of children can be cured, in India only a little over 50%
                are able to complete treatment. The major cause of failure is
                treatment abandonment, primarily due to the financial burden
                cancer therapy puts on the entire family.
              </p>
            </div>

            <div className="obj_card">
              <p>
                Inherited blood disorders are extremely common in the country,
                with more than 10000 cases diagnosed every year. Nearly 50% of
                these patients do not survive till the age of 20 due to poverty
                and lack of access to curative treatment.
              </p>
            </div>
          </div>

          <p className="turst-content">
            These are just a few examples. The spectrum of blood and cancer
            diseases in children is far and wide, with better diagnosis possible
            today due to medical advancements. Bone marrow transplantation is
            the only curative option in many cases. However, the relatively high
            cost is prohibitive for a majority of the population in need of this
            life saving procedure.
          </p>
          <p className="turst-content">
            This Trust aims to address these imbalances, by providing financial
            and social assistance in addition to cutting edge medical treatment
            thereby ensuring a holistic approach to treatment of major childhood
            illnesses.
          </p>
          <p className="turst-content">
            Also, Anamaya Children's Trust is a completely not for profit trust
            where funds received are processed completely for patient care. This
            is in stark contrast to crowdfunding platforms which charge hefty
            commission fees that can be as high as 25%!
          </p>
        </div>
      </div>

      <div className="defalut_section">
        <div className="container">
          <div className="title_section">
            <h2 style={{ margin: 0 }}>Success stories</h2>
            <img src="/img/about/title-line.png" />
          </div>
<p  className="stories_text" >
Arun (name changed for privacy) was a 2 year old child when he was referred to us for treatment. He was diagnosed with a rare immunodeficiency called Wiskott-Aldrich syndrome when he was 1 year old, which predisposed him to repeated infections, eczema, diarrhoea and bleeding episodes. The only curative option for him was a bone marrow transplant, however he did not have any sibling or other fully matched related or unrelated donors. As a result, his mother was chosen as the stem cell donor despite being half-matched (haploidentical stem cell transplant). As the family could not afford a bone marrow transplant, crowd funding was initiated and he was fortunate to get the support of numerous donors, which enabled him to undergo this procedure. It is now more than a year post transplant, and he is happy, healthy and his parents are looking forward to a bright future!
</p>
        <div className="stories">
        <img style={{ position: "static" }} src="/img/about/stories1.png" />
        <img style={{ position: "static" }} src="/img/about/stories2.png" />
        </div>
    
        </div>
      </div>


      <section className="testimonialSection">
      <div className="container">
        <div className="title_section">
          <h2 style={{ margin: 0 }} >Trustees</h2>
          <p>We are a group of dedicated and highly motivated healthcare professionals with a singular aim of providing the highest quality of medical care to children in need.</p>
          <img src="/img/about/title-line.png" alt="Title Line" />
        </div>

        <div className="testimonial-wrapper">
         

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
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="slide">
                  <div className="card">
                    <div className="team-img">
                      <img src={testimonial.image} alt=""/>
                    </div>
                    <h3 className="name">{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="team_about">
              {/* <span>About Us</span> */}
            
              <p style={{paddingBottom:20}} >   
Paediatric Haematology, Oncology and Blood & Marrow Transplantation,
MGM Cancer Institute and MGM Healthcare, Chennai
              </p>
              <h5>A few points about the team:</h5>
              <ul>
                <li style={{ display: "flex", alignItems: "baseline", gap:"10px" }}>
                  <img
                    style={{ position: "relative", top: "7px" }}
                    className="svg"
                    src="/img/svg/dot.svg"
                  />
                  <p>
                  Experience of performing more than 700 bone marrow transplants (BMT) as a team.
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "baseline" ,gap:"10px"}}>
                  <img
                    style={{ position: "relative", top: "7px" }}
                    className="svg"
                    src="/img/svg/dot.svg"
                  />
                  <p>
                  Perform all types of BMTs, including matched family donor, matched unrelated donor, haploidentical (half
                    matched) as well as advanced T-cell depleted transplants.
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "baseline" ,gap:"10px"}}>
                  <img
                    style={{ position: "relative", top: "7px" }}
                    className="svg"
                    src="/img/svg/dot.svg"
                  />
                  <p>
                  Only BMT unit in Tamil Nadu felicitated for Exemplary Performance under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY).
                  </p>
                </li>
              </ul>
              <p>
                Haematopoietic stem cell transplants (aka bone marrow transplants) to cure relapsed blood cancers (leukemias), aggressive
                solid organ tumours, haemoglobin disorders such as thalassaemia or sickle cell anaemia, primary immune deficiencies, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Layout and Responsiveness */}
      <style jsx>{`

     .card{
     width: 100%;
     }
     .testimonialSection{
     margin-top:60px;
     }
        .testimonial-wrapper {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .testimonial-image {
          width: 100%;
          max-width: 500px;
          border-radius: 10px;
        }

        .right-column {
          flex: 1;
          min-width: 100%;
        }
          .team-img img{
          height:300px;
          width: 100%;
              object-fit: cover;
    object-position: 0px -40px;
          }
.name {
    padding-top: 20px;
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

    <div className="wrapper">
        <div className="container">
            <div className="wrapp" >
      <div className="introSection">
        <h2 className="title">How you can help:</h2>
        <p className="description">
          Donate generously your contribution can literally help make the difference between life and death.<br />
          Spread the word the wider the reach, the more children benefit.
        </p>
        <div className="contactSection">
        <h3 className="subtitle">Contact us:</h3>
        <ul className="infoList">
          <li><strong>Email:</strong> <a href="mailto:trustanamaya@gmail.com">trustanamaya@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+919790269026">+91-9790269026</a></li>
        </ul>
      </div>
      </div>

     

      
      <div className="donationSection">
        <h3 className="title">Donate:</h3>
        <ul className="infoList">
          <li><strong>Account name:</strong> ANAMAYA CHILDRENS TRUST</li>
          <li><strong>Account type:</strong> Current account</li>
          <li><strong>Account number:</strong> 50200104048994</li>
          <li><strong>IFSC code:</strong> HDFC0006690</li>
          <li><strong>Branch:</strong> Mylapore</li>
          <li className="note">(Applied for 12A and 80G registration for tax exemption)</li>
        </ul>
      </div>
      </div>
    </div>
    </div>

      <Footer />
    </>
  );
}
