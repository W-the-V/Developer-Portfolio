import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLinks"
                id="linkLeft"
              >
                <h3 className="content-title">Website</h3>
              </a>
              <a
                href={certificate.certificate_link2}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLinks"
              >
                <h3 className="content-title">Repository</h3>
              </a>
            </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title">{certificate.title}</h2>
            <h3 className="cert-body-subtitle">{certificate.subtitle}</h3>
            <h3 className="cert-about-text">{certificate.about}</h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
