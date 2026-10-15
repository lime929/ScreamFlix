import Recommendation from './Recommendation.jsx';
import classes from './RecommendationList.module.css';

function RecommendationList({ recommendations }) { 
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <ul className={classes.recommendations}>
      {recommendations.map((recommendation) => ( 
        <Recommendation
          key={recommendation.id}
          title={recommendation.title}
          name={recommendation.name}
          text={recommendation.text}
        />
      ))}
    </ul>
  );
}

export default RecommendationList;
