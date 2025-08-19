import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import ListSx from './styles';

const List = ({ places, childClicked, isLoading }) => {

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState([]);

  console.log({ childClicked })

  useEffect(() => {
    if (!places) return;
    const refs = Array(places.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);

  }, [places]);


  return (

    <Box sx={ListSx.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions

      </Typography>
      {isLoading ? (

        <Box sx={ListSx.loading}>
          <CircularProgress size={30} />
        </Box>

      ) : (<>


        <FormControl variant="standard" size="small" sx={ListSx.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>

          </Select>

        </FormControl>
        <FormControl variant="standard" size="small" sx={ListSx.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3} sx={ListSx.list}>

          {places?.map((place, index) => (

            <Grid item key={index} size={{ xs: 12 }} >
              <PlaceDetails
                place={place}
                ref={elRefs[index]}
                selected={Number(childClicked) === index}
              />
            </Grid>

          ))}
        </Grid>


      </>)}


    </Box>

  );
}

export default List;
