import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
  console.log(sw, ne);

  try {
    const { data: { data } } = await axios.get(URL, {

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
   headers: {
    'x-rapidapi-key': '780d0668c3msh76057500bff0321p15be64jsndf2e44fcb5ad',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
    }
    );
    return data;


  } catch (error) {
    console.log(error);
  }
}