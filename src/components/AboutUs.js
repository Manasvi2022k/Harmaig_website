import React, { useState } from 'react';
import './AboutUs.css';
import Footer from '../components/Footer'

const AboutUs = () => {
  const [isReadMoreVisible, setReadMoreVisible] = useState(false);

  const toggleReadMore = () => {
    setReadMoreVisible(!isReadMoreVisible);
  };

  return (
    <section className="about-section">
      <div className="content">
        <h2>Who We Are</h2>
        <p>
          We are a dedicated team of professionals passionate about delivering top-quality products and services to our clients.{' '}
          {isReadMoreVisible && (
            <span className="more-text">
              Our mission is to innovate and lead in the industry with integrity and excellence. We value collaboration, transparency, and continuous learning.
            </span>
          )}
        </p>
        <button onClick={toggleReadMore} className="read-more-btn">
          {isReadMoreVisible ? 'Read Less' : 'Read More'}
        </button>

        <h2>Our Mission</h2>
        <p>
          To empower our clients by providing exceptional solutions that make a positive impact in their business and community. We aim to be a trusted partner in their success journey.
        </p>

        <h2>Our Company</h2>
        <p>
          We have a talented and diverse team of experts, from developers and designers to strategists and marketers. Each member brings their unique skills and creativity to the table, ensuring that we deliver the best results.
        </p>
      </div>

      {/* Uncomment the company photo section if you want to add an image */}
      {/* <div className="company-photo">
        <img src="harmaig.jpg" alt="Company Photo" />
      </div> */}
      <div >
         <Footer/>
       </div>
    </section>
    //   <div className='Footer'>
    //      <Footer/>
    //    </div>
  );
};

export default AboutUs;
