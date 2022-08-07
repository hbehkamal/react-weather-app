import { FC } from "react";

import "./style.scss";

interface IProps {
  tabsLabel: string[];
  activeTabIndex: number;
}
const Tabs: FC<IProps> = ({ tabsLabel, activeTabIndex }) => {
  return (
    <div className="tabs">
      {tabsLabel.map((label, index) => (
        <div className={`tab ${activeTabIndex === index ? "active" : ""}`}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
