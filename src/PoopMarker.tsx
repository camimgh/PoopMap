import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import PoopObjectType from './PoopObject'
import L from 'leaflet';

interface PoopMarkerProps {
    poopList: Array<PoopObjectType>;
    isBad: boolean;
}

function PoopMarker(props: PoopMarkerProps) {
    let averagedPoopObject = {
        'accessibility': 0,
        'ambiance': 0,
        'amenity': 0,
        'cleanliness': 0,
        'privacy': 0,
        'restroomSpaciousness': 0,
        'stallSpaciousness': 0,
        'mirror': false,
        'comments': new Array<string>
    }
    for (let i = 0; i < props.poopList.length; i++) {
        averagedPoopObject['accessibility'] = props.poopList[i]['accessibility']
        averagedPoopObject['ambiance'] += props.poopList[i]['ambiance']
        averagedPoopObject['amenity'] += props.poopList[i]['amenity']
        averagedPoopObject['cleanliness'] += props.poopList[i]['cleanliness']
        averagedPoopObject['comments'].push(props.poopList[i]['comment'])
        averagedPoopObject['privacy'] += props.poopList[i]['privacy']
        averagedPoopObject['restroomSpaciousness'] += props.poopList[i]['restroomSpaciousness']
        averagedPoopObject['stallSpaciousness'] += props.poopList[i]['stallSpaciousness']
        averagedPoopObject['mirror'] = props.poopList[i]['mirror']
    }
    averagedPoopObject['accessibility'] /= props.poopList.length
    averagedPoopObject['ambiance'] /= props.poopList.length
    averagedPoopObject['amenity'] /= props.poopList.length
    averagedPoopObject['cleanliness'] /= props.poopList.length
    averagedPoopObject['privacy'] /= props.poopList.length
    averagedPoopObject['restroomSpaciousness'] /= props.poopList.length
    averagedPoopObject['stallSpaciousness'] /= props.poopList.length
    function getHappyIcon() {
        return L.icon({
        iconUrl: require("./images/poopEmoji_36.png"),
        iconSize: [36, 36]
        })
    };
    function getSadIcon() {
       return L.icon({
        iconUrl: require("./images/sad-pile-of-poo-50.png"),
        iconSize: [36, 36]
       }) 
    }
  return (
        <Marker position={[props.poopList[0].lat, props.poopList[0].long]} icon={props.isBad ? getSadIcon() : getHappyIcon()}>
            <Popup maxHeight={300}>
            <div>
                    <h3>{props.poopList[0].name}</h3>
                    <h5>Average ratings:</h5>
                    <p>Accessibility: {averagedPoopObject.accessibility.toFixed(1)}
                    <br/>
                    Ambiance: {averagedPoopObject.ambiance.toFixed(1)}
                    <br/>
                    Amenity quality: {averagedPoopObject.amenity.toFixed(1)}
                    <br/>
                    Cleanliness: {averagedPoopObject.cleanliness.toFixed(1)}
                    <br/>
                    Privacy: {averagedPoopObject.privacy.toFixed(1)}
                    <br/>
                    Restroom Spaciousness: {averagedPoopObject.restroomSpaciousness.toFixed(1)}
                    <br/>
                    Stall Spaciousness: {averagedPoopObject.stallSpaciousness.toFixed(1)}
                    <br/>
                    Full Length Mirror: {averagedPoopObject.mirror ? 'Yes' : 'No'}
                    </p>
                    <h5>Individual ratings ({props.poopList.length}):</h5>
                    {props.poopList.map((poop, index) => (
                <div>
                {/* <h6>{poop.description} {poop.gender === "" ? <></> : ({poop.gender})}</h6> */}
                {poop.gender === "" ? <h6>{poop.description}</h6> : <h6>{poop.description} ({poop.gender})</h6>}
                <p>
                    Accessibility: {poop.accessibility}
                    <br/>
                    Ambiance: {poop.ambiance}
                    <br/>
                    Amenity quality: {poop.amenity}
                    <br/>
                    Cleanliness: {poop.cleanliness}
                    <br/>
                    Privacy: {poop.privacy}
                    <br/>
                    Restroom Spaciousness: {poop.restroomSpaciousness}
                    <br/>
                    Stall Spaciousness: {poop.stallSpaciousness}
                    <br/>
                    Availability: {poop.availability}
                    <br/>
                    {poop.comment === "" ? <></> : <p>Comment: {poop.comment}</p>}
                </p>
                </div>
            ))}
                </div>
            </Popup>
        </Marker>
  );
};

export default PoopMarker;