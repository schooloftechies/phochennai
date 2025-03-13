"use client";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState, useEffect } from 'react';

const Footer = ({ topbarIcon = true, darkLogo = true }) => {

  return (
    <div className="iknow_tm_copyright" style={{ padding: "40px 0" }}>
      <div className="container">
        <footer className="footer">
          <div className="footer-column">
            <a href="/">
              <img src="/img/logo/logo.png" alt="Logo" />
            </a>
            <p>
              Our dedicated team ensures children receive personalized,
              compassionate care every step of the way.
            </p>
          </div>
          <div className="footer-column">
            <h3>Doctors</h3>
            <ul>
              
              <li>
                <Link href="/deena">Dr. M. Deenadayalan</Link>
              </li>
              <li>
                <Link href="/vimal">Dr Vimal Kumar G</Link>
              </li>
              <li>
                <Link href="/rishab">Dr. Rishab Bharadwaj</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Treatments</h3>
            <ul>
              <li>
                <Link href="/treatment/anaemia">Anaemia</Link>
              </li>
              <li>
                <Link href="/treatment/immune">Immune</Link>
              </li>
              <li>
                <Link href="/treatment/acute-leukaemia" >Acute Leukaemia</Link>
              </li>
              <li>
                <Link href="/treatment/aplastic-anaemia" >Aplastic Anaemia</Link>
              </li>
              <li>
                <Link href="/treatment/blood-and-marrow-transplantation" >Blood Marrow transplantation</Link>
              </li>
              <li>
                <Link href="/treatment/itp" >ITP</Link>
              </li>
              <li>
                <Link href="/treatment/thalassaemia" >Thalassaemia</Link>
              </li>

            </ul>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto: phochennai@gmail.com"> phochennai@gmail.com</a>
              </li>
              <li>
                MGM Cancer Institute, Nelson Manickam Road, Rajeswari St,
                Rajaram Mehta Nagar, Aminjikarai, Chennai, Tamil Nadu 600029
              </li>
            </ul>
          </div>
        </footer>
        <div className="inner">
          <div className="left">
            <p>Copyright © PHOchennai. All Rights Reserved.</p>
          </div>
          <div className="right">
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <img
                      className="svg"
                      src="/img/svg/social/facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="svg"
                      src="/img/svg/social/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="svg"
                      src="/img/svg/social/youtube.svg"
                      alt="YouTube"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="svg"
                      src="/img/svg/social/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
