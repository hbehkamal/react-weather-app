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
    <div className="tabs my-2" slot={slot}>
      {tabsLabel.map((label, index) => (
        <div
          key={label}
          className={`tab ${activeTabIndex === index ? "active" : ""}`}
          onClick={onClick(index)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
