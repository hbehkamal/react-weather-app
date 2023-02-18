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

  return (
    <div className="w-11/12">
      <div className="flex items-center flex-col">
        <img
          // style={{ width: 154 }}
          className="w-1/3"
          src={`img/${icon}.png`}
          alt={conditions}
        />
        <h2 className="text-6xl">{temp} C°</h2>
        <h3 className="font-bold">{conditions}</h3>
      </div>

      <Swiper
        direction="vertical"
        slidesPerView={6}
        style={{ height: "50vh" }}
        className="p-3 w-full"
        autoHeight
        observer
      >
        {!!hours.length &&
          hours.map((hour) => (
            <SwiperSlide className="w-full" style={{ height: "auto" }}>
              <SingleHour {...hour} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SingleDay;
