import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="team-banner section-item">
    <div className="bg" />
    <div className="section-content section-padding">
      <div className="middle-value animate__animated animate__fadeInLeft">
        <div className="banner-subTitle">
          {bannerText.subTitle}
        </div>
        <div className="banner-title">
          {bannerText.title}
        </div>
        <div className="banner-sub">
          {bannerText.desc}
        </div>
      </div>
    </div>
  </div>
)

export default Banner;