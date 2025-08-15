import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
  console.log(sw, ne);

  try {
    const { data: { data } } = await axios.get(URL, {

      params: {
        bl_latitude:sw.lat, 
        tr_latitude: ne.lat, 
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'x-rapidapi-key': 'ff78af4662msh57c3b064b3cc319p1b6977jsn961525ffe5c6',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    }
    );
    return data;


  } catch (error) {
    console.log(error);
  }
}