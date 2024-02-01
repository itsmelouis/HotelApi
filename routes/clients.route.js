import express from "express";
import { clientController } from "../controllers/clients.controller.js";

export const router = express.Router();

//Récupération des informations de l'hôtel :
router.get("/hotel", clientController.getHotelInformation());
//Liste de toutes les chambres de l'hôtel :
router.get("/hotel/chambres", clientController.getHotelChambres());
//Récupération des informations d'une chambre spécifique :
router.get("/hotel/chambres/:roomId", clientController.getHotelChambreById());
//Réservation d'une chambre :
router.post("/reservation", clientController.createReservation());
//Annulation (supprimer) de la réservation :
router.delete("/reservation/:id", clientController.deleteReservation());

