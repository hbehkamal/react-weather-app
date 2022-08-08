import { Condition } from "types";

import "./style.scss";

interface IProps {
  conditions: Condition;
  isToday?: boolean;
}
const SingleDay = ({ conditions, isToday = false }) => {
  const { temp } = conditions;
  return (
    <div>
      <h2>{temp} C</h2>
    </div>
  );
};

export default SingleDay;
