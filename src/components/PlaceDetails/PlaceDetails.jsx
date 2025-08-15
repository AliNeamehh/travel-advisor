import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';

import PlaceDetailsSx from './styles';


const PlaceDetails = ({ place }) => {



    return (

        <Card elevation={6}>


            <CardMedia

                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://media-cdn.tripadvisor.com/media/photo-w/12/55/2b/dd/evening-at-salt.jpg'}
                title={place.name}

            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">

                    <Typography variant="subtitle1" gutterBottom>
                        Price
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {place.price_level}
                    </Typography>

                </Box>

                  <Box display="flex" justifyContent="space-between">

                    <Typography variant="subtitle1" gutterBottom>   
                       Ranking
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {place.ranking}
                    </Typography>
                </Box>

                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center" key={award.display_name}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>

                    </Box>                  

                ))}

                {place?.cuisine?.map(({name})=>( 
                    <Chip key={name} size="small" label={name}  />
                ))}

                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" sx={PlaceDetailsSx.subtitle} >
                    <LocationOnIcon/> {place.address}

                    </Typography>
                )}

                {place?.phone &&(
                     <Typography gutterBottom variant="body2" color="textSecondary" sx={PlaceDetailsSx.spacing}>
                    <PhoneIcon /> {place.phone}
                    </Typography>

                )}
            </CardContent>
            <CardActions>
               <Button size="small" color="primary" onClick={()=>window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={()=>window.open(place.website, '_blank')}>
                    Website
                </Button>
               
             
            </CardActions>



        </Card>
    );
}

export default PlaceDetails;
