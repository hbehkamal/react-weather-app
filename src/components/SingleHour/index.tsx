import { FC } from "react";
import { IHour } from "types";

const SingleHour: FC<IHour> = ({ datetime, temp }) => {
  return (
    <div style={{ padding: 10 }}>
      {datetime} | {temp} C°
    </div>
  );
};

export default SingleHour;
