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
    tempmin,
    tempmax,
  } = weather;
  const now = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(new Date());
  return (
    <div className="w-full flex flex-col h-full justify-between bg-sky-500">
      <div className="flex flex-col items-center justify-between pt-4">
        <span className="flex flex-col items-start w-full px-6">
          <span>{now}</span>
          <span className="text-white">
            Day: {tempmax} | Night: {tempmin}
          </span>
        </span>
        <div className="flex px-6 pt-4 justify-between w-full mb-16 text-white">
          <div className="flex flex-col items-start mr-6">
            <span className="text-8xl">
              {temp}
              <sup>°C</sup>
            </span>
            <span>
              Feels like {feelslike}
              <sup className="text-sm">°C</sup>
            </span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <img className="w-24" src={`img/${icon}.png`} alt={conditions} />
            <span className="text-base">{conditions}</span>
          </div>
        </div>
        <div className="w-5/6">
          <HourDetails
            humidity={humidity}
            pressure={pressure}
            uvindex={uvindex}
            visibility={visibility}
            className="border-spacing-1 border border-gray-300 text-white p-2 rounded"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <Swiper nested slidesPerView={5}>
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
