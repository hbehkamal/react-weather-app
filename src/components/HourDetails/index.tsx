import { FC } from "react";
import { IHourDetails } from "./HourDetails.type";

const HourDetails: FC<IHourDetails> = ({
  humidity,
  uvindex,
  visibility,
  pressure,
}) => {
  return (
    <div className="bg-gray-100 w-full z-10 h-auto shadow-inner shadow-gray-300">
      <div className="w-5/6 p-1 mx-auto my-auto flex justify-between">
        <span className="font-bold">Humidity:</span>
        <span>{humidity}%</span>
      </div>
      <div className="w-5/6 p-1 mx-auto my-auto flex justify-between">
        <span className="font-bold">UV Index:</span>
        <span>{uvindex}</span>
      </div>
      <div className="w-5/6 p-1 mx-auto my-auto flex justify-between">
        <span className="font-bold">Visibility:</span>
        <span>{visibility} KM</span>
      </div>
      <div className="w-5/6 p-1 mx-auto my-auto flex justify-between">
        <span className="font-bold">Pressure:</span>
        <span>{pressure} mBar</span>
      </div>
    </div>
  );
};

export default HourDetails;
