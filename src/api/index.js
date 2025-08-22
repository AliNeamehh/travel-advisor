import axios from 'axios';





export const getPlacesData = async (type, sw, ne) => {
  console.log(sw, ne);

  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY_TRAVEL,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    }
    );
    return data;


  } catch (error) {
    console.log(error);
  }
}

export const getWeatherData = async (latitude, longitude) => {


  try {

    const { data } = await axios.get('https://open-weather13.p.rapidapi.com/latlon', {


      params: {
        latitude: latitude,
        longitude: longitude,
        lang: 'EN'
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY_WEATHER,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }


    });

    return data;

  } catch (error) {
    console.log(error);
  }



}