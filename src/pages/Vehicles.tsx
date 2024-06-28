import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {useState} from "react";
import {vehiclesApi} from "@subaruofamerica/cv-redux-vehicle-service-client";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehiclesApi.middleware),
});

const Vehicles: React.FC = () => {
  const [vin, setVin] = useState('');
  const { data = {}, error, isLoading } = vehiclesApi.useGetVehicleByVinQuery({vin});

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper elevation={0}>
        <Card  sx={{ mx: 11 }}>
          <CardMedia
            component="img"
            alt="subaru"
            height="140"
            image={require("../img/car.png")}
          />
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Subaru of America - Demo React Project
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Vehicle Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <input
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                placeholder="Enter VIN"
              /><br/>
              {isLoading ? (
                'Loading...'
              ) : (
                <section>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </section>
              )}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </React.Fragment>
  );
}

export default Vehicles;
