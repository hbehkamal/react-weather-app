import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, Search, SingleDay, SmallDayCard } from "components";
import { useGetWeatherByNameQuery } from "api";
import { Condition } from "types";

import "swiper/css";
import "./style.scss";
import { roundNumbers } from "utils";

const Home = () => {
  const [city, setCity] = useState(
    localStorage.getItem("city") || "Mashhad, Iran"
  );
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [today, setToday] = useState<Condition>();
  const [tomorrow, setTomorrow] = useState<Condition>();
  const [tenDays, setTenDays] = useState<Condition[]>();

  const { data, error, isLoading } = useGetWeatherByNameQuery(city);

  useEffect(() => {
    if (error || isLoading || !data) return;

    const { days = [] } = data;
    // Filter hours before now
    const todayCondition = {
      ...roundNumbers(days[0]),
      hours: days[0].hours.filter((hour) => {
        const now = new Date(Date.now()).getHours();

        return now <= Number(hour.datetime.split(":")[0]);
      }),
    };
    setToday(todayCondition);
    setTomorrow(roundNumbers(days[1]));
    setTenDays(days.slice(0, 10).map(roundNumbers));
  }, [data]);

  const onSlideChange = (slide) => {
    setActiveTabIndex(slide.snapIndex);
  };

  return (
    <div className="home-container bg-sky-800">
      <Search setCity={setCity} />
      <Swiper onSlideChange={onSlideChange}>
        <Tabs
          tabsLabel={["Today", "Tomorrow", "10 Days"]}
          activeTabIndex={activeTabIndex}
          slot="container-start"
        />
        <SwiperSlide>
          {!today ? (
            <div>loading</div>
          ) : (
            <SingleDay city={city} isToday weather={today} />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {!tomorrow ? (
            <div>loading</div>
          ) : (
            <SingleDay city={city} weather={tomorrow} />
          )}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col overflow-y-scroll w-full h-full">
            {tenDays &&
              !!tenDays.length &&
              tenDays.map((day) => <SmallDayCard {...day} />)}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
