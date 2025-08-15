import React ,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import MapSx from './styles';


const Map = ({ setCoordinates, setBounds, coordinates, places ,setChildClicked }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');
  

    return (
       
        <Box sx={MapSx.mapContainer}>

            <GoogleMapReact

                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >

                {places?.map((place, i) => (
                    <Box
                        sx={MapSx.marker}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                    >
                        {!isDesktop ? <LocationOnOutlineIcon color='primary' fontSize='large' /> : (

                            <Paper elevation={3} sx={MapSx.paper}>

                                <Typography variant='subtitle2' gutterBottom>

                                    {place.name}

                                </Typography>

                                <img
                                    sx={MapSx.pointer}

                                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}


                                />

                                <Rating name='read-only' size='small' value={Number(place.rating)} readOnly />


                            </Paper>


                        )}


                    </Box>


                ))}

            </GoogleMapReact>
        </Box>

    );
}

export default Map;
