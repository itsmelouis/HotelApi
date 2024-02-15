import { hotelService } from "../services/hotel.service.js";

class HotelController {
  getHotelClients() {
    return (req, res) => {
        res.status(200).send(hotelService.getClients());
      }
  }

  getClientById() {
    return (req, res) => {
        if(!req.params.id) res.status(400).send('Missing id parameter');
        if(!hotelService.getClientById(req.params.id)) res.status(404).send({"error": "Client not found"});
        res.status(200).send(hotelService.getClientById(req.params.id));
      }
  }

  createClient() {
    return (req, res) => {
        if(!req.body.name || !req.body.email || !req.body.phone) res.status(400).send({"error": "Missing name, email or phone parameters"});
        const newClient = hotelService.createClient(req.body);
        if(!newClient) res.status(500).send({"error": "Internal error"});
        res.status(200).json(hotelService.getClientById(newClient));
      }
  }

  updateClient(id) {
    return (req, res) => {
        if(!req.params.id) res.status(400).send('Missing id parameter');
        if(!req.body.name || !req.body.email || !req.body.phone) res.status(400).send({"error": "Missing name, email or phone parameters"});
        res.status(200).json(hotelService.updateClient(req.params.id, req.body));
      }
  }

  createClientReservation() {
    return async (req, res) => {
      try {
        const room = await hotelService.getHotelChambreById(req.params.roomId);
        if (!room) return res.status(404).json({"error": "Room not found"});
        
        const reservation = hotelService.createClientReservation(req.params.roomId);
        res.status(200).json({"message": `Reservation created for room ${reservation}`});
      } catch (error) {
        console.error("Error creating client reservation:", error);
        res.status(500).json({"error": "An unexpected error occurred"});
      }
    };
  }
  
    deleteClientReservation() {
      return async (req, res) => {
        try {
          const reservation = await hotelService.getClientReservation(req.params.roomId);
          if (!reservation) {
            return res.status(404).json({"error": "Reservation not found for this room"});
          }
          
          await hotelService.deleteClientReservation(req.params.roomId);
          res.status(200).json({"message": `Successfully deleted reservation for room id: ${req.params.roomId}`});
        } catch (error) {
          console.error("Error deleting client reservation:", error);
          res.status(500).json({"error": "An unexpected error occurred"});
        }
      };
    }
}

export const hotelController = new HotelController();
