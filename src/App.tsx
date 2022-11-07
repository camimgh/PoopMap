import React from 'react';
import './App.css';
import { MapContainer, TileLayer, } from 'react-leaflet'
import goodPoopData from './data/goodPoopData.json'
import badPoopData from './data/badPoopData.json'
import PoopMarker from './PoopMarker'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function App() {
  function HelpControl() {
    const [show, setShow] = React.useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const helpButton = (
      <>
        <Button onClick={handleShow}>What is this?</Button>
        <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>What is this?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>My name is Cami Mejia and I attend(ed) MIT from 2019-2023. I study/ied computer science and 
              media studies and enjoy making stupid things. 
            </p>
            <p>In Fall 2021, I took a class called CMS.614 Network Cultures taught by Chris Peterson. In this class, we were
              tasked with creating a 'sociotechnical artifact', something that shows and highlights the relationship between the social and the technical. 
              As a result, I sent out a survey to MIT's student body asking them their favorite
              and least favorite places to shit on campus.
            </p>
            <p>Here are those results.</p>
          </Modal.Body>
        </Modal.Dialog>
        </Modal>
      </>
    )
    return (
        <div className="leaflet-control leaflet-bar helpControl">{helpButton}</div>
    )
  }
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
    <HelpControl/>
</MapContainer> 
  </div>
  );
}

export default App;
