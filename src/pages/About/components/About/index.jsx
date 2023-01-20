import { aboutText } from '../../static';

const About = () => (
  <div className="about section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {aboutText.title}
        </div>
        <div className="divided" />
        <div className="about-list">
          <ul>
            {aboutText.content.map((item) => (
            <li key={item.id}>
              <div>
                <span className="list-number">
                  {item.number}
                </span>
                <span className="list-unit">
                  {item.unit}
                </span>
                <span>
                  +
                </span>
              </div>
              <p className="list-desc">
                {item.desc}
              </p>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About;