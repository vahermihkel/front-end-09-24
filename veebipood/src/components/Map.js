import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useState } from 'react';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [position, setPosition] = useState({center: [59.4388, 24.7562], zoom: 11});
      
  return (
    <div>
      <button onClick={() => setPosition({center: [59.4388, 24.7562], zoom: 11})}>Kõik Tallinna poed</button>
      <button onClick={() => setPosition({center: [59.4172, 24.7095], zoom: 13})}>Kristiine</button>
      <button onClick={() => setPosition({center: [59.4215, 24.7939], zoom: 13})}>Ülemiste</button>
      <button onClick={() => setPosition({center: [59.4372, 24.7641], zoom: 13})}>Viru Keskus</button>
      <MapContainer style={{"height": "300px", "margin": "3%", "border-radius": "10px"}} center={position.center} zoom={position.zoom} scrollWheelZoom={false}>
        <ChangeView center={position.center} zoom={position.zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.4172, 24.7095]}>
          <Popup>
            Kristiine pood. <br /> Avatud 9-21.
          </Popup>
        </Marker>
        <Marker position={[59.4215, 24.7939]}>
          <Popup>
            Ülemiste pood. <br /> Avatud 9-21.
            <a 
              target='_blank'
              rel="noreferrer"
              href="https://www.google.com/maps/search/%C3%BClemiste/@59.4229093,24.7889834,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
              Suur-Sõjamäe 4
            </a>
          </Popup>
        </Marker>
        <Marker position={[59.4372, 24.7641]}>
          <Popup>
            Viru pood. <br /> Avatud 9-21.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map