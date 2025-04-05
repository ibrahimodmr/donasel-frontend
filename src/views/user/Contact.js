import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for marker icon not showing up
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const center = [40.06655638554136, 29.53260149672394]; // donasel koordinatları

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-4 mt-12">
      <div className="w-full max-w-4xl p-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-4 text-2xl font-semibold">İletişim Bilgileri</h2>
        <p className="flex flex-wrap"><strong className="w-28">Adres:</strong> İnegöl - BURSA</p>
        <p className="flex flex-wrap"><strong className="w-28">Telefon:</strong> (123) 456-7890</p>
        <p className="flex flex-wrap"><strong className="w-28">Email:</strong> donasel@gmail.com</p>
      </div>

      <div className="w-full max-w-4xl border border-gray-300 rounded-lg h-[400px]">
        <MapContainer center={center} zoom={13} className="w-full h-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              DONASEL MOBİLYA ADRES BİLGİSİ EKLENECEK
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
