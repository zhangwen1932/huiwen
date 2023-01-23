import { Row, Col } from 'antd';
import { cooperativePartnerText } from '../../static';

import './styles.scss';

const CooperativePartner = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {cooperativePartnerText.title}
        </div>
        <div className="divided" />
        <div className="partner-content width760">
          <Row justify="center" align="middle">
            {cooperativePartnerText.content.map((item) => (
              <Col span={6} key={item.id}>
                <div className="img-ele">
                  <img src={item.imgUrl} alt="" style={{ width: `${item.width}`}}/>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default CooperativePartner;