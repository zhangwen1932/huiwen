import React from 'react';
import { footerText } from '../static'; 
import { contactText, correlationText } from '../../pages/Contact/static';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="section-padding">
        <div className="footer-content">
          <div className="logo">
            <img src={footerText.logo} alt="black-logo" />
          </div>
          <div className="other-info">
            <div className="contact-info">
              <div className="list-item" data-id="phone">
                <div className="list-img">
                  <img src={contactText.content.phone.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.phone.info}</div>
              </div>
              <div className="list-item" data-id="email">
                <div className="list-img">
                  <img src={contactText.content.email.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.email.info}</div>
              </div>
              <div className="list-item" data-id="address">
                <div className="list-img">
                  <img src={contactText.content.address.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.address.info}</div>
              </div>
            </div>
            <div className="relative-info">
              {correlationText.content.map((item) => (
                <div className="relative-item" key={item.id}>
                  <img src={item.footerImgUrl} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="copyright">
            {footerText.copyRight}
          </div>
        </div>
      </div>
    </div>
  );
}
