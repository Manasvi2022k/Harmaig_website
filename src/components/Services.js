import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="content">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Custom Jewelry Design</h3>
            <p>
              Create your own unique jewelry pieces with our custom design service. Our expert craftsmen will bring your vision to life using the finest materials.
            </p>
          </div>

          <div className="service-item">
            <h3>Jewelry Repair</h3>
            <p>
              From resizing rings to repairing broken chains, our skilled technicians handle all kinds of jewelry repairs with precision and care.
            </p>
          </div>

          <div className="service-item">
            <h3>Jewelry Cleaning & Polishing</h3>
            <p>
              Keep your jewelry looking as good as new! Our professional cleaning and polishing service will restore the shine and brilliance of your pieces.
            </p>
          </div>

          <div className="service-item">
            <h3>Engraving Services</h3>
            <p>
              Personalize your jewelry with custom engraving. Add a special message, name, or date to make your piece one-of-a-kind.
            </p>
          </div>

          <div className="service-item">
            <h3>Appraisal Services</h3>
            <p>
              Get an accurate appraisal of your jewelry for insurance, resale, or personal knowledge. Our certified appraisers ensure precision and trustworthiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
