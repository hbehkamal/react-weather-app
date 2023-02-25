import { FC } from "react";
import { IHour } from "types";

const LargeHourCard: FC<IHour> = ({ datetime, temp, icon }) => {
  return (
    <div className="flex flex-col w-full items-center pt-3 pb-1 bg-slate-200">
      <div className="flex flex-col items-center flex-1">
        <span className="mb-2 text-lg">
          {temp} <span className="text-sm"><sup className="text-sm">°C</sup></span>{" "}
        </span>
        <img
          style={{ width: 48, height: 48 }}
          src={`img/${icon}.png`}
          alt={icon}
          className="mb-1"
        />
      </div>
      <span className="border-t border-1 border-gray-900 w-full text-md">
        {Number(datetime.split(":")[0])}
      </span>
    </div>
  );
};

export default LargeHourCard;
