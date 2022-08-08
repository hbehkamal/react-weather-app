import debounce from "lodash.debounce";

import { connect, ConnectedProps } from "react-redux";

import { getCity } from "api";
import { RootState } from "store";

import "./style.scss";

type SearchPropsType = ConnectedProps<typeof connector>;

const Search = ({ getCityAPI }: SearchPropsType) => {
  const debouncedSearch = debounce(async (criteria) => {
    const result = await getCityAPI(criteria);
  }, 1000);

  const onChange = (event) => {
    const { value } = event.target;
    debouncedSearch(value);
  };
  return <input onChange={onChange} placeholder="Enter a city name ..." />;
};

/****************Conncet component to Store ********************/
const mapState = (state: RootState) => ({
  city: getCity.endpoints.getCityByName.select(1)(state),
});
const mapDispatch = {
  getCityAPI: getCity.endpoints.getCityByName.initiate,
};
const connector = connect(mapState, mapDispatch);

export default connector(Search);
