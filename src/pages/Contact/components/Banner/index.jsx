import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="contact-banner section-item">
    <div className="mask" />
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="banner-title">
          {bannerText.title}
        </div>
        <div className="banner-sub">
          {bannerText.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Banner;