import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import MapSx from './styles';

import mapStyles from './mapStyles';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked ,WeatherData
}) => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    console.log('Map render coordinates:', coordinates);
    console.log('Map render places:', places);

    return (

        <Box sx={MapSx.mapContainer}>

            <GoogleMapReact

                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true ,zoomControl: true ,styles:mapStyles }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => {
                    console.log('onChildClick fired, child:', child);
                    setChildClicked(child);
                }}
            >

                {places?.map((place, i) => {
                    const lat = Number(place.latitude);
                    const lng = Number(place.longitude);
                    return (
                        <div
                            key={i}
                            lat={lat}
                            lng={lng}
                            style={{ position: 'relative', zIndex: 1 }}
                        >


                            {!isDesktop ? (
                                <LocationOnOutlineIcon sx={MapSx.pointer} />
                            ) : (
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


                        </div>
                    );
                })}


            {WeatherData?.weather?.map((data, i) => (
                <div key={i} lat={WeatherData.coord.lat} lng={WeatherData.coord.lon}>
                    <img src={`http://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`} height="70px" />

                </div>
            ))}


            </GoogleMapReact>
        </Box>

    );
}

export default Map;
