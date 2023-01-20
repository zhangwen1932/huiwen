import { coreCompetenceText } from '../../static';

console.log('coreCompetenctText', coreCompetenceText);

const CoreCompetence = () => (
  <div className="core-competence section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {coreCompetenceText.title}
        </div>
        <div className="divided" />
        <div className="partner-list">
          核心竞争力
        </div>
      </div>
    </div>
  </div>
)

export default CoreCompetence;