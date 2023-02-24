import { FC } from "react";
import { IHour } from "types";

const LargeHourCard: FC<IHour> = ({ datetime, temp, icon }) => {
  return (
    <div className="flex flex-col w-full items-center bg-white pt-3 pb-1 rounded px-1 mr-1">
      <div className="flex flex-col items-center flex-1">
        <span className="mb-2">
          {temp} <span className="text-sm">C°</span>{" "}
        </span>
        <img
          style={{ width: 24, height: 24 }}
          src={`img/${icon}.png`}
          alt={icon}
          className="mb-1"
        />
      </div>
      <span className="border-t border-1 border-gray-900 w-full text-sm">
        {Number(datetime.split(":")[0])}
      </span>
    </div>
  );
};

export default LargeHourCard;
