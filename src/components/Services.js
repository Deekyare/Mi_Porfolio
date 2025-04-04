import React from "react";

function Services() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="row g-4">
          <div className="col-md-4 col-12">
            <div className="card card-custom h-100 text-center">
              <div className="card-body">
                <h3 className="card-title text-malva">Web Development</h3>
                <p className="text-muted">
                  Creating responsive and interactive websites using modern
                  frameworks like React.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card card-custom h-100 text-center">
              <div className="card-body">
                <h3 className="card-title text-malva">UI/UX Design</h3>
                <p className="text-muted">
                  Designing user-friendly interfaces with a focus on aesthetics
                  and functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card card-custom h-100 text-center">
              <div className="card-body">
                <h3 className="card-title text-malva">WordPress Development</h3>
                <p className="text-muted">
                  Building custom WordPress solutions for businesses and
                  individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
