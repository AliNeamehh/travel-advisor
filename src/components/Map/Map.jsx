import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import MapSx from './styles';


const Map = () => {
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0 }; // Replace with actual coordinates

    return (
        <Box sx={MapSx.mapContainer}>

            <GoogleMapReact       
            
               bootstrapURLKeys={{ key:  }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''} 
            
            />
             
        </Box>

    );
}

export default Map;
