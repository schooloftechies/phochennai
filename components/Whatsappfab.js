import { FaWhatsapp } from 'react-icons/fa'; 
import React from 'react';


const styles = {
    fabContainer: {
      position: 'fixed',
      bottom: '50px',
      right: '40px',
      zIndex: 1000,
    },
    fabButton: {
      backgroundColor: '#25d366', 
      borderRadius: '50%',
      padding: '15px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    },
    fabButtonHover: {
      backgroundColor: '#128c7e', 
    },
  };

export const Whatsappfab = () => {

    const phoneNumber = '+919790269026'; 
  const message = 'Hello, I need assistance!'; 
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.fabContainer}>
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.fabButton,
        ...(isHovered ? styles.fabButtonHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  </div>
  )
}
