export const prepareCities = (
  data: { cities: string[]; country: string }[]
) => {
  const output = [];
  data.map(({ country, cities }) => {
    cities.map((city) => {
      output.push({
        value: `${city}, ${country}`,
        label: `${city}, ${country}`,
      });
    });
  });
  return output;
};
