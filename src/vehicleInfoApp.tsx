import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { vehiclesApi } from '@subaruofamerica/cv-redux-vehicle-service-client';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const store = configureStore({
  reducer: {
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehiclesApi.middleware),
});

function VehicleInfo() {
  const [vin, setVin] = useState('');
  const { data = {}, error, isLoading } = vehiclesApi.useGetVehicleByVinQuery({vin});

  return (
  <Card>
    <CardMedia 
          component="img"
      alt="subaru"
      height="140"
      image={require("./img/car.png")}
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
  );
}

function App() {
  return (
    <Provider store={store}>
      <VehicleInfo />
    </Provider>
  );
}

export default App;
