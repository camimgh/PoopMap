import React from "react";
import { Marker, Popup } from 'react-leaflet';

interface PoopObjectType {
    accessibility: number;
    ambiance: number;
    amenity: number;
    cleanliness: number;
    description: string;
    gender: string;
    privacy: number;
    restroomSpaciousness: number;
    stallSpaciousness: number;
    mirror: boolean;
    name: string;
    comment: string;
    lat: number;
    long: number;
    availability: string;
}

export default PoopObjectType;