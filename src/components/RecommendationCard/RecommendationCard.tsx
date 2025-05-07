import styles from './RecommendationCard.module.scss';
import rocket from '../../assets/accounts/rocket.png';

interface RecommendationItem {
  id: number;
  label: string;
  text: string;
}

interface Props {
  recommendations: RecommendationItem[];
}

export const RecommendationCard: React.FC<Props> = ({ recommendations }) => {
  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
  };

  return (
    <div className={styles.recommendation}>
      <div className={styles.recommendation__header}>
        <img src={rocket} alt='rocket' />
        <h2 className={styles.recommendation__title}>AI-Powered Recommendations</h2>
      </div>
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className={styles.recommendation__item}>
          <div className={styles.recommendation__block}>
            <p className={styles.recommendation__label}>{recommendation.label}</p>
            <p className={styles.recommendation__text}>{recommendation.text}</p>
          </div>
          <button
            className={styles.recommendation__button}
            onClick={() => handleButtonClick(recommendation.label)}
          >
            <span className={styles['recommendation__button-text']}>Apply</span>
          </button>
        </div>
      ))}
    </div>
  );
};