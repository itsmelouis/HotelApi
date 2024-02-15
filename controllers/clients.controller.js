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
      return async (req, res) => {
        try {
          const room = await clientService.getHotelChambreById(req.params.roomId);
          if (!room) return res.status(404).json({"error": "Room not found"});
          
          const reservation = clientService.createReservation(req.params.roomId);
          res.status(200).json({"message": `Reservation created for room ${reservation}`});
        } catch (error) {
          console.error("Error creating reservation:", error);
          res.status(500).json({"error": "An unexpected error occurred"});
        }
      };
    }
    
    
      deleteClientReservation() {
        return async (req, res) => {
          try {
            const reservation = await clientService.getReservation(req.params.roomId);
            if (!reservation) {
              return res.status(404).json({"error": "Reservation not found for this room"});
            }
            
            await clientService.deleteReservation(req.params.roomId);
            res.status(200).json({"message": `Successfully deleted reservation for room id: ${req.params.roomId}`});
          } catch (error) {
            console.error("Error deleting client reservation:", error);
            res.status(500).json({"error": "An unexpected error occurred"});
          }
        };
      }
C      
}

export const clientController = new ClientController();
