"use client";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from 'next/image';

const images = [
  { id: 1, src: '/img/gallery/BloodDisorders.jpg', alt: 'Blood Disorders', tag: 'Blood Disorders' },
  { id: 2, src: '/img/gallery/CancerTherapy.jpg', alt: 'Cancer Therapy', tag: 'Cancer Therapy' },
  { id: 3, src: '/img/gallery/childhood-cancer.jpg', alt: 'Childhood Cancer', tag: 'Childhood Cancer' },
  { id: 4, src: '/img/gallery/Lymphomas.jpg', alt: 'Lymphomas', tag: 'Lymphomas' },
  { id: 5, src: '/img/gallery/PaediatricCancerTreatments.jpg', alt: 'Paediatric Cancer Treatments', tag: 'Paediatric Cancer Treatments' },
  { id: 6, src: '/img/gallery/PaediatricLeukaemia.jpg', alt: 'Paediatric Leukaemia', tag: 'Paediatric Leukaemia' },
  { id: 7, src: '/img/gallery/Paediatric-Leukaemia.jpg', alt: 'Blood Disorders', tag: 'Blood Disorders' },
  { id: 8, src: '/img/gallery/SafetyforChildren.jpg', alt: 'Cancer Therapy', tag: 'Cancer Therapy' },
  { id: 9, src: '/img/gallery/childhood-cancer.jpg', alt: 'Childhood Cancer', tag: 'Childhood Cancer' },
  { id: 10, src: '/img/gallery/Lymphomas.jpg', alt: 'Lymphomas', tag: 'Lymphomas' },
  { id: 11, src: '/img/gallery/PaediatricCancerTreatments.jpg', alt: 'Paediatric Cancer Treatments', tag: 'Paediatric Cancer Treatments' },
  { id: 12, src: '/img/gallery/PaediatricLeukaemia.jpg', alt: 'Paediatric Leukaemia', tag: 'Paediatric Leukaemia' },
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 8)); // Show 6 images initially
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Function to load more images
  const loadMoreImages = () => {
    const nextImages = images.slice(visibleImages.length, visibleImages.length + 6);
    setVisibleImages((prevImages) => [...prevImages, ...nextImages]);
  };

  // Open the lightbox with the selected image
  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
         <TopBar />
         <div className="gallery_banner">
        <div className="container">
          <h2>Gallery</h2>
        </div>
      </div>
      <div className='container gallery-container'>
        {visibleImages.map((image) => (
          <div
            key={image.id}
            className='gallery-item'
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              layout="responsive"
              loading="lazy" // Lazy load images
            />
            <div className='overlay'>{image.tag}</div> {/* Changed to tag for consistency */}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleImages.length < images.length && (
        <button className='load-more' onClick={loadMoreImages}>
          Load More
        </button>
      )}

      {/* Lightbox Modal */}
      {isOpen && (
        <div className={`lightbox ${isOpen ? 'open' : ''}`}>
          <button className='close' onClick={closeLightbox}>×</button>
          <img src={currentImage} alt="Large view" />
        </div>
      )}
        <Footer />
    </div>
  );
}
