import debounce from "lodash.debounce";

import { connect, ConnectedProps } from "react-redux";

import { getCity } from "api";
import { RootState } from "store";

import "./style.scss";
import { FC } from "react";

interface ISearch {
  getCityAPI: (string) => Promise<{
    data: Record<string, unknown>;
    isSuccess: boolean;
  }>;
  setCity: (state: string) => void;
}

// const Search: FC<ISearch> = ({ getCityAPI, setCity }) => {
const Search = ({ getCityAPI, setCity }) => {
  const debouncedSearch = debounce(async (criteria) => {
    const { data, isSuccess } = await getCityAPI(criteria);
    console.log("result: ", data);
    if (isSuccess) {
      setCity(data?.data?.[0]?.name);
    }
  }, 1000);

  const onChange = (event) => {
    const { value } = event.target;
    debouncedSearch(value);
  };

  return <input onChange={onChange} placeholder="Enter a city name ..." />;
};

/****************Conncet component to Store ********************/
const mapDispatch = {
  getCityAPI: getCity.endpoints.getCityByName.initiate,
};
const connector = connect(null, mapDispatch);

export default connector(Search);
