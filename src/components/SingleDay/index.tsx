import { FC } from "react";
import { Condition } from "types";

import "./style.scss";
import SingleHour from "components/SingleHour";
interface IProps {
  weather: Condition;
  isToday?: boolean;
  city: string;
}

const SingleDay: FC<IProps> = ({ weather, isToday = false, city }) => {
  const { temp, icon, conditions, hours } = weather;

  return (
    <div className="w-11/12">
      <div className="flex items-center flex-col">
        <img className="w-1/3" src={`img/${icon}.png`} alt={conditions} />
        <h2 className="text-6xl">{temp} C°</h2>
        <span>
          <span>{city}</span>
          <h3 className="font-bold">{conditions}</h3>
        </span>
      </div>

      <div
        className="p-3 first-letter:flex flex-col overflow-y-scroll"
        style={{ height: "50vh" }}
      >
        {!!hours.length &&
          hours
            .filter((hour) => {
              const now = new Date(Date.now()).getHours();

              return !isToday || now <= Number(hour.datetime.split(":")[0]);
            })
            .map((hour) => <SingleHour key={hour.datetime} {...hour} />)}
      </div>
    </div>
  );
};

export default SingleDay;
