import { FormattedMessage } from 'umi';
import { correlationText } from '../../static';
import './styles.scss';

const Correlation = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={correlationText.title} />
        </div>
        <div className="divided" />
        <div className="correlation-content">
          {correlationText.content.map((item) => (
            <div className="list-item" key={item.id}>
              <div className="list-img">
                <img src={item.imgUrl} />
              </div>
              <div className="list-item-description">
                <div className="title">{item.content.title}</div>
                <div className="address">
                  <span className="icon">
                    <img src="./images/contact/address.svg" />
                  </span>
                  <span>{item.content.address}</span>
                </div>
                <div className="phone">
                  <span className="icon">
                    <img src="./images/contact/phone.svg" />
                  </span>
                  {item.content.phone}
                </div>
                <div className="email">
                  <span className="icon">
                    <img src="./images/contact/email.svg" />
                  </span>
                  {item.content.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Correlation;
