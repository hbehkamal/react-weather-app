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
        <span>Humidity:</span>
        <span className="font-light">{humidity}%</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between border-gray-300 border-b border-1">
        <span>UV Index:</span>
        <span className="font-light">{uvindex}</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between border-gray-300 border-b border-1">
        <span>Visibility:</span>
        <span className="font-light">{visibility} km</span>
      </div>
      <div className="w-full p-1 my-auto flex justify-between">
        <span>Pressure:</span>
        <span className="font-light">{pressure} mBar</span>
      </div>
    </div>
  );
};

export default HourDetails;
