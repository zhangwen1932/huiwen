import { Row, Col } from 'antd';
import { FormattedMessage } from 'umi';
import { trustText } from '../../static';
import './styles.scss';

const Trust = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={trustText.title} />
        </div>
        <div className="divided" />
        <div className="section-desc">
          <p>
            <FormattedMessage id={trustText.desc} />
          </p>
        </div>
        <div className="trust-content">
          <Row justify="center" align="top" wrap={true}>
            {trustText.content.map((item) => (
              <Col md={4} sm={8} xs={8} className="trust-list" key={item.id}>
                <div className="item-icon">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="item-desc">
                  {item.elcontent.map((ele, index) => (
                    <p key={index}>
                      <FormattedMessage id={ele} />
                    </p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default Trust;