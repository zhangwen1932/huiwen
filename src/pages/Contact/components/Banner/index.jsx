import { FormattedMessage } from 'umi';
import { bannerText } from '../../static';
import './styles.scss';

const Banner = () => (
  <div className="contact-banner section-item">
    <div className="bg" style={{ backgroundImage: `url(${bannerText.bg})`}}/>
    <div className="section-content section-padding">
      <div className="middle-value animate__animated animate__fadeInLeft">
        <div className="banner-title">
          
          <FormattedMessage id={bannerText.title} />
        </div>
        <div className="banner-sub">
          {bannerText.desc.map((item, index) => (
            <p key={index}>
              <FormattedMessage id={item} />
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Banner;