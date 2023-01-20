import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="banner section-item">
    <div className="mask" />
    <div className="section-content">
      <div className="middle-value">
        <div className="banner-title">
          {bannerText.title}
        </div>
        <div className="banner-sub">
          {bannerText.subTitle}
        </div>
      </div>
    </div>
  </div>
)

export default Banner;