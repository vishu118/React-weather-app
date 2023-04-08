const KEY = "1d05dbe198bc70cdbd4d06d7f8cb4e11";

const getIconURL = (iconID) => 
  `https://openweathermap.org/img/wn/${iconID}@2x.png`;
;

const getData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { feels_like, temp, humidity, pressure, temp_max, temp_min },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL : getIconURL(icon) ,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    pressure,
    speed,
    country,
    name,
  };
};

export { getData };
