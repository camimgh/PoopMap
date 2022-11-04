import React from 'react';
import './App.css';
import { MapContainer, TileLayer, } from 'react-leaflet'
import goodPoopData from './data/goodPoopData.json'
import badPoopData from './data/badPoopData.json'
import PoopMarker from './PoopMarker'

function App() {
  return (
  <div>
   <MapContainer center={[42.359331586138204, -71.09311744384267]} zoom={17} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {Object.values(goodPoopData).map((poopList, index) => (
            <PoopMarker poopList={poopList} isBad={false}/>
          ))}
  {Object.values(badPoopData).map((poopList, index) => (
            <PoopMarker poopList={poopList} isBad={true}/>
          ))}
</MapContainer> 
  </div>
  );
}

export default App;
