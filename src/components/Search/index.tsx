import debounce from "lodash.debounce";
import { AutoComplete } from "antd";

import { connect, ConnectedProps } from "react-redux";

import { getCities } from "api";
import { RootState } from "store";

import "./style.scss";
import { FC, useState } from "react";
import { prepareCities } from "utils/prepareCities";

interface ISearch {
  getCityAPI: (string) => Promise<{
    data: Record<string, unknown>;
    isSuccess: boolean;
  }>;
  setCity: (state: string) => void;
}

// const Search: FC<ISearch> = ({ getCityAPI, setCity }) => {
const Search = ({ getCitiesAPI, setCity }) => {
  const [cities, setCities] = useState([]);
  const [options, setOptions] = useState([]);
  
  const onFocus = () => {
    if (!cities.length) {
      getCitiesAPI().then(({ data: result }) => {
        if (!result.error) {
          setCities(prepareCities(result.data));
        }
      });
    }
  };

  const onSearch = (value) => {
    if (!value || value === "") {
      setOptions([]);
      return;
    }

    setOptions(cities.filter((item) => item.value.includes(value)));
  };

  const debounceOnSearch = debounce(onSearch, 300);

  const onSelect = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <AutoComplete
      onFocus={onFocus}
      options={options}
      onSelect={onSelect}
      onSearch={debounceOnSearch}
      className="m-2"
      placeholder="Enter a city name ..."
    />
  );
};

/****************Conncet component to Store ********************/
const mapDispatch = {
  getCitiesAPI: getCities.endpoints.getCities.initiate,
};
const connector = connect(null, mapDispatch);

export default connector(Search);
