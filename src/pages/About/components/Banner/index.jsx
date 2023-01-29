import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="banner section-item">
        <div className="bg" style={{ backgroundImage: `url(${bannerText.bg})`}}/>
    <div className="section-content section-padding">
      <div className="middle-value animate__animated animate__fadeInLeft">
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