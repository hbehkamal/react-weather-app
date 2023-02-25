import { FC } from "react";
import { useSwiper } from "swiper/react";

import "./style.scss";

interface IProps {
  tabsLabel: string[];
  activeTabIndex: number;
  slot: string;
}
const Tabs: FC<IProps> = ({ tabsLabel, activeTabIndex, slot }) => {
  const swiper = useSwiper();

  const onClick = (index) => () => {
    swiper.slideTo(index);
  };

  return (
    <div className="tabs flex my-2 pb-4" slot={slot}>
      {tabsLabel.map((label, index) => (
        <div
          key={label}
          className={`w-1/3 text-center ${activeTabIndex === index ? "active" : ""}`}
          onClick={onClick(index)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
