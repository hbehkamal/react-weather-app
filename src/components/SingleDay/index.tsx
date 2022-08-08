import { FC } from "react";
import { Condition } from "types";

import "./style.scss";
interface IProps {
  weather: Condition;
  isToday?: boolean;
}

const SingleDay: FC<IProps> = ({ weather, isToday = false }) => {
  const { temp, icon, conditions } = weather;
  console.log("weather: ", weather);

  return (
    <div>
      {isToday ? (
        <div className="summary-today">
          <img src={`img/${icon}.png`} alt={conditions} />
          <h2>{temp} C°</h2>
          <h3>{conditions}</h3>
        </div>
      ) : (
        <div className="summary-tomorrow">
          <img src={`img/${icon}.png`} alt={conditions} />
          <h2>{temp} C°</h2>
          <h3>{conditions}</h3>
        </div>
      )}
    </div>
  );
};

export default SingleDay;
