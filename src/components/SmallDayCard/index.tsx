import HourDetails from "components/HourDetails";
import { FC, useState } from "react";
import { IHour } from "types";

const SmallDayCard: FC<IHour> = ({
  datetime,
  temp,
  icon,
  humidity,
  uvindex,
  visibility,
  pressure,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isTenDays = datetime.includes("-");

  const onClick = () => setIsOpen(!isOpen);
  return (
    <div
      className={`flex flex-col w-full rounded-sm mb-1 ${
        isTenDays ? "flex-1" : ""
      }`}
    >
      <div
        style={{ padding: "1vh" }}
        className={`bg-white flex justify-between ${isTenDays ? "h-full" : ""}`}
        onClick={onClick}
      >
        <div className="flex items-center">
          <img
            style={{ width: 24, height: 24 }}
            src={`img/${icon}.png`}
            alt={icon}
            className="mr-2"
          />
          <span>
            {isTenDays
              ? new Date(datetime).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })
              : Number(datetime.split(":")[0])}
          </span>
        </div>

        <span className="flex items-center">
          {temp} C°{" "}
          <img
            style={{ width: 24, height: 24 }}
            src={`icon/arrow-down.svg`}
            className="ml-2"
            alt="arrow-down"
          />
        </span>
      </div>
      {isOpen && (
        <HourDetails
          humidity={humidity}
          uvindex={uvindex}
          visibility={visibility}
          pressure={pressure}
          className="bg-gray-100 shadow-inner shadow-gray-300"
        />
      )}
    </div>
  );
};

export default SmallDayCard;