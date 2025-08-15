import React ,{useState,useEffect} from "react";
import { CssBaseline, Grid } from "@mui/material";


import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";



const App = () => {

    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    const [childClicked,setChildClicked] = useState(null);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    },[]);

    useEffect(()=>{
        if (!bounds) return;
        console.log(coordinates, bounds);
       getPlacesData(bounds.sw, bounds.ne)
         .then((data)=>{
            console.log(data);
            setPlaces(data);
         })

    },[coordinates, bounds]);



    return (

        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <List places={places}
                       childClicked={childClicked}
                    
                    
                    />



                </Grid>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <Map  
                     
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;