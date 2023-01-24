import React from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[41.8781, -87.6298]} defaultZoom={11}>
      <Marker width={50} anchor={[41.8781, -87.6298]} />
    </Map>
  );
}