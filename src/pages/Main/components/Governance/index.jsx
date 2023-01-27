import { Row, Col } from 'antd';
import { render } from 'react-dom';
import { governanceText } from '../../static';
import './styles.scss';

const Row1 = governanceText.content.slice(0, 2);
const Row2 = governanceText.content.slice(2, 4);

const Governance = () => {
  const renderRow = (data) => {
    return (
      data.map((item) => (
        <div className="row-ele" key={item.id}>
          <div className="row-position">
            <div className="row-title">{item.title}</div>
            <div className="row-list">{item.list.map((ele, index) => (
              <div key={index} className="list-ele">
                <div className='dotted' />
                <p>{ele}</p>
              </div>
            ))}</div>
          </div>
        </div>
      ))
    )
  }
  return(
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {governanceText.title}
        </div>
        <div className="divided" />
        <div className="section-desc">
            <p>
              {governanceText.desc}
            </p>
          </div>
        <div className="governance-content">
          <div className="governance-list">
            <div className="governance-row">
              {renderRow(Row1)}
            </div>
            <div className="governance-row">
              {renderRow(Row2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default Governance;