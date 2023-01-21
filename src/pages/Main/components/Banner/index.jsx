import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="main-banner section-item">
    <div className="mask" />
    <div className="section-content">
      <div className="middle-value">
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