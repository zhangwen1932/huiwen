import { aboutText } from '../../static';

const About = () => (
  <div className="about">
    <div className="title">
      {aboutText.title}
    </div>
    <div className="divided" />
    <div className="desc">
      {aboutText.desc}
    </div>
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
)

export default About;