import { FC } from "react";
import { IHourDetails } from "./HourDetails.type";

const HourDetails: FC<IHourDetails> = ({
  humidity,
  uvindex,
  visibility,
  pressure,
  className = "",
}) => {
  return (
    <div className={`w-full z-10 h-auto ${className}`}>
      <div className="w-full p-1 my-auto flex justify-between border-gray-300 border-b border-1">
        <span className="font-semibold">Humidity:</span>
        <span>{humidity}%</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between border-gray-300 border-b border-1">
        <span className="font-semibold">UV Index:</span>
        <span>{uvindex}</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between border-gray-300 border-b border-1">
        <span className="font-semibold">Visibility:</span>
        <span>{visibility} km</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between">
        <span className="font-semibold">Pressure:</span>
        <span>{pressure} mBar</span>
      </div>
    </div>
  );
};

export default HourDetails;
