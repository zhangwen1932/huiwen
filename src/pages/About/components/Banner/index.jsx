import { bannerText } from '../../static';

const Banner = () => (
  <div className="banner">
    <div className="banner-title">
      {bannerText.title}
    </div>
    <div className="banner-sub">
      {bannerText.subTitle}
    </div>
  </div>
)

export default Banner;