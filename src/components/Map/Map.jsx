import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import MapSx from './styles';


const Map = ({setCoordinates,setBounds,coordinates}) => {
    const isMobile = useMediaQuery('(min-width:600px)');


    return (
        <Box sx={MapSx.mapContainer}>

            <GoogleMapReact       
            
               bootstrapURLKeys={{ key:  }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''} 
            
            />
             
        </Box>

    );
}

export default Map;
