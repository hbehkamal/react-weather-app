import { FC } from "react";
import { Condition } from "types";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";
import SingleHour from "components/SingleHour";
interface IProps {
  weather: Condition;
  isToday?: boolean;
}

const SingleDay: FC<IProps> = ({ weather, isToday = false }) => {
  const { temp, icon, conditions, hours } = weather;
  console.log("weather: ", isToday, weather);

  return (
    <div>
      {isToday ? (
        <div className="summary-today">
          <img
            style={{ width: 154 }}
            src={`img/${icon}.png`}
            alt={conditions}
          />
          <h2>{temp} C°</h2>
          <h3>{conditions}</h3>
        </div>
      ) : (
        <div className="summary-tomorrow">
          <img
            style={{ width: 154 }}
            src={`img/${icon}.png`}
            alt={conditions}
          />
          <h2>{temp} C°</h2>
          <h3>{conditions}</h3>
        </div>
      )}
      <Swiper
        direction="vertical"
        slidesPerView={6}
        style={{ height: "50vw", paddingTop: 10 }}
      >
        {!!hours.length &&
          hours.map(({ datetime, temp }) => (
            <SwiperSlide>
              <SingleHour datetime={datetime} temp={temp} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SingleDay;
