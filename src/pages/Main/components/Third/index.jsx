import { thirdText } from '../../static';
import './styles.scss';

const Third = () => (
  <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {thirdText.title}
        </div>
        <div className="divided" />
        <div className="section-desc width760">
          <p>
            {thirdText.desc}
          </p>
        </div>
        <div className="third-content">
          <div className="third-list">
          {thirdText.content.map((item) => (
            <div className="third-item" key={item.id}>
              <div className="item-box">
                <div className="item-icon">
                  <img src={item.imgUrl} alt="" />
                </div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Third;