import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta" 
        data-testid="cta-container">
      <a href={CV} 
        download
        className="btn"
        data-testid="cta-cv-link">Download CV</a>
      <a href="#contact" 
        className="btn-primary"
        data-testid="cta-contact-link">Contact me</a>
    </div>
  )
}

export default CTA