import React from "react";
import { getTotalScore } from "./averageService";
import classes from './totalScoreComponentStyles.scss';

export const TotalScoreComponent = () => {
  const [totalScore, setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setTotalScore(getTotalScore(scores));
  }, []);

  return (
    <div>
      <span className={classes.resultBackground}>
      Enviroment var: {process.env.API_BASE}
      </span>
    </div>
  );
};