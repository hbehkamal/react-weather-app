import { FC } from "react";
import { Condition } from "types";
import { Swiper, SwiperSlide } from "swiper/react";

import LargeHourCard from "components/LargeHourCard";

import "./style.scss";
import HourDetails from "components/HourDetails";
interface IProps {
  weather: Condition;
  isToday?: boolean;
  city: string;
}

const SingleDay: FC<IProps> = ({ weather, isToday = false, city }) => {
  const {
    temp,
    icon,
    conditions,
    hours,
    feelslike,
    humidity,
    pressure,
    uvindex,
    visibility,
  } = weather;

  return (
    <div className="w-full flex flex-col h-full justify-around">
      <div className="flex flex-col items-center justify-between pt-4">
        <div className="flex px-2 mb-16 -mt-8">
          <div className="flex flex-col items-start mr-6">
            <span>Now</span>
            <span>Max: x | Min: y</span>
            <h2 className="text-6xl">{temp} C°</h2>
            <span>Feels like {feelslike} C°</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <img className="w-1/2" src={`img/${icon}.png`} alt={conditions} />
            <span>{conditions}</span>
          </div>
        </div>
        <div className="w-5/6">
          <HourDetails
            humidity={humidity}
            pressure={pressure}
            uvindex={uvindex}
            visibility={visibility}
            className="bg-slate-400 py-3 rounded-sm"
          />
        </div>
      </div>

      <div className="flex flex-row px-2">
        <Swiper nested slidesPerView={6}>
          {!!hours.length &&
            hours.map((hour) => (
              <SwiperSlide>
                <LargeHourCard key={hour.datetime} {...hour} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SingleDay;
