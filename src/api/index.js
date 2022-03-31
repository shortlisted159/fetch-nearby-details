



import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (type,sw, ne) => {
  try {
    //const { data: { data } } = await axios.get(URL, options);
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        // 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        // 'x-rapidapi-key': 'a691bebc4cmsh8eee47137fedc16p1772a3jsnc3c07a84cd85'
        // 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        // 'x-rapidapi-key': '6b22b78a31msh13f89920d74dd79p13cdefjsn8435e6fcc907'
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'c3ef6bd517msh7db2a49da0cb114p144581jsn2322d9e564a7'
      }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat,lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {lon: lng,lat: lat, },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '6b22b78a31msh13f89920d74dd79p13cdefjsn8435e6fcc907'
      }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}