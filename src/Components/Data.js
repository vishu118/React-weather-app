const KEY ="1d05dbe198bc70cdbd4d06d7f8cb4e11"



const getData = async(city , units = 'metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${units}`;

    const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data);
      console.log(data)
} 

export {getData}