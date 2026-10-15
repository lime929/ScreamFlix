import classes from "./Recommendation.module.css";

function Recommendation({ title, name, text }) {
  return (
    <article className={classes.article}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
    </article>
  );
}

export default Recommendation;
 