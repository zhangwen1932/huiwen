import { Row, Col } from 'antd';
import { cooperativePartnerText } from '../../static';

import './styles.scss';

const CooperativePartner = () => {

  return(
    <div className="section-item">
      <div className="section-content section-padding">
        <div className="middle-value">
          <div className="title">
            {cooperativePartnerText.title}
          </div>
          <div className="divided" />
          <div className="partner-content">
            <Row justify="center" align="middle" wrap={true}>
              {cooperativePartnerText.content.map((item) => (
                <Col md={6} sm={8} xs={12} key={item.id}>
                  <div className="img-ele">
                    <a href={item.href} target="_blank" rel="noreferrer" style={{ width: `${item.width}`}}>
                      <img src={item.imgUrl} alt="" style={{ width: `${item.width}`}}/>
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CooperativePartner;