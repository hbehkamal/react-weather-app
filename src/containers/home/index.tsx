import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, Search, Today } from "components";

import "swiper/css";
import "./style.scss";

const Home = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onSlideChange = (slide) => {
    setActiveTabIndex(slide.snapIndex);
  };

  return (
    <div className="home-container">
      <Search />
      <Tabs
        tabsLabel={["Today", "Tommorow", "10 Days"]}
        activeTabIndex={activeTabIndex}
      />
      <Swiper onSlideChange={onSlideChange}>
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
