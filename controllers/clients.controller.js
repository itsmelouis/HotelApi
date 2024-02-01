import { clientService } from "../services/clients.service.js";


class ClientController {
    getHotelInformation() {
        return (req, res) => {
            res.status(200).send(clientService.getHotelInformation());
          }
    }

    getHotelChambres() {
        return (req, res) => {
            res.status(200).send(clientService.getHotelChambres());
          }
    }

    getHotelChambreById() {
        return (req, res) => {
            const room = clientService.getHotelChambreById(req.params.roomId);
            if(!room) res.status(404).send({"error": "Room not found"});
            else res.status(200).send(room);
          }
    }

    createReservation() {
        return (req, res) => {
            const reservation = hotelService.createClientReservation(req.params.roomId);
            if(!reservation) res.status(400).send({"error": "This room does not exist"});
            res.status(200).json({"message": `Reservation created for ${reservation.name}`});
          }
      }
    
      deleteReservation() {
        return (req, res) => {
            const reservation = hotelService.deleteClientReservation(req.params.roomId);
            if(!reservation) res.status(400).send({"error": "This room does not exist"});
            res.status(200).json({"message": `Successfully deleted reservation for this room id: ${req.params.roomId}`});
          }
        }
}

export const clientController = new ClientController();
