import React from 'react';
import ImageSlider from './ImageSlider';

const Different = () => {
  // Define the images for the slider
  const sliderImages = [
    // Mobile app screenshots
    '/images/IMG_1407.PNG',
    '/images/IMG_1408.PNG',
    '/images/IMG_1409.PNG',
    '/images/IMG_1410.PNG',
    '/images/IMG_1411.PNG',
    // Desktop screenshots
    '/images/HG Workers.png',
    '/images/HG JM.png',
    '/images/HG Job creation.png'
  ];

  return (
    <section id="different" className="different">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Why HitchGuardian is Different</h2>
          <p>Built by Alberta-based oil and gas veterans</p>
        </div>
        <div className="different-content animate-on-scroll">
          <p>Built by Alberta-based oil and gas veterans with nearly 20 years of direct field experience, HitchGuardian is the only platform tailored specifically to the complexities of oilfield crew scheduling and journey management. Unlike generic, one-size-fits-all systems, our solution automatically assigns the best-suited workers, keeps every team member informed, and ensures full compliance—all in real time. This specialized, data-driven approach is your ultimate edge in boosting efficiency, reducing costs, and ensuring safety in the high-stakes world of oil and gas operations. Discover the future of workforce logistics with HitchGuardian.</p>
          
          <div className="slider-wrapper animate-on-scroll">
            <ImageSlider images={sliderImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;