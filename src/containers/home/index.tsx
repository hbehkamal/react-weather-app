import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, Search, SingleDay, SmallDayCard } from "components";
import { useGetWeatherByNameQuery } from "api";
import { Condition } from "types";

import "swiper/css";
import "./style.scss";

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
    setToday(days[0]);
    setTomorrow(days[1]);
    setTenDays(days.slice(0, 10));
  }, [data]);

  const onSlideChange = (slide) => {
    setActiveTabIndex(slide.snapIndex);
  };

  return (
    <div className="home-container bg-slate-400">
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
          <div className="p-3 flex flex-col overflow-y-scroll w-full h-full">
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
