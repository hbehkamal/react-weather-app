import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, Search, Today } from "components";
import { useGetWeatherByNameQuery } from "api";

import "swiper/css";
import "./style.scss";

const Home = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const { data, error, isLoading } = useGetWeatherByNameQuery("Mashhad, Iran");

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
          <Today />
        </SwiperSlide>
        <SwiperSlide>22222 Slide 2</SwiperSlide>
        <SwiperSlide>22222 Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
