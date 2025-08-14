import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import ListSx from './styles';

const List = () => {

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Place 1', type: 'restaurant', rating: 4.5 },
    { name: 'Place 2', type: 'hotel', rating: 4.0 },
    { name: 'Place 3', type: 'attraction', rating: 3.5 },
    { name: 'Place 4', type: 'restaurant', rating: 4.2 },

  ];

  return (

    <Box sx={ListSx.container}>
      <Typography variant='h4'>
        Restaurents, Hotels & Attractions
      </Typography>
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

          <Grid item key={index}  size={{xs:12}} >
            <PlaceDetails place={place} />
          </Grid>

        ))}
      </Grid>
    </Box>

  );
}

export default List;
