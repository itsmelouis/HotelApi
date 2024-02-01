import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Client {
  constructor(hotelData) {
    this.hotelData = hotelData;
  }

  getHotel() {
    return {
      "name": this.hotelData.name,
      "location": this.hotelData.location,
      "contact": this.hotelData.contact,
      "facilities": this.hotelData.facilities,
      "numberOfRooms": this.hotelData.rooms.length
    };
  }
  getChambreById(roomId) {
    return this.hotelData.rooms.find((room) => room.id === parseInt(roomId));
  }

  findReservation(roomId) {
    return this.hotelData.rooms.find((room) => room.id === parseInt(roomId));
  }
}

class ClientService {
  constructor() {
    this.hotel = this.loadHotelData();
  }

  loadHotelData() {
    const hotelData = this.loadJsonFile(path.resolve(__dirname, "../data/hotel.json"));
    return new Client(hotelData);
  }

  loadJsonFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(`Erreur de lecture du fichier ${filePath} :`, err);
      throw err;
    }
  }

  getHotelInformation() {
    return this.hotel.getHotel();
  }
  getHotelChambres() {
    return this.hotel.hotelData.rooms;
  }
  getHotelChambreById(roomId) {
    return this.hotel.getChambreById(roomId);
  }
  createReservation(roomId) {
    return this.hotel.findReservation(roomId);
  }
  deleteReservation(roomId) {
    return this.hotel.findReservation(roomId);
  }
}

export const clientService = new ClientService();
