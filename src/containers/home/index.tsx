import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, Search, SingleDay } from "components";
import { useGetWeatherByNameQuery } from "api";
import { Condition } from "types";

import "swiper/css";
import "./style.scss";

const Home = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [today, setToday] = useState<Condition>();
  const [tomorrow, setTomorrow] = useState<Condition>();
  const [tenDays, setTenDays] = useState<Condition[]>();

  const { data, error, isLoading } = useGetWeatherByNameQuery("Mashhad, Iran");

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
    <div className="home-container">
      <Search />
      <Swiper onSlideChange={onSlideChange}>
        <Tabs
          tabsLabel={["Today", "tomorrow", "10 Days"]}
          activeTabIndex={activeTabIndex}
          slot="container-start"
        />
        <SwiperSlide>
          {!today ? <div>loading</div> : <SingleDay isToday weather={today} />}
        </SwiperSlide>
        <SwiperSlide>
          {!tomorrow ? <div>loading</div> : <SingleDay weather={tomorrow} />}
        </SwiperSlide>
        <SwiperSlide>22222 Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
