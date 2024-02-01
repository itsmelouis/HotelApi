import express from "express";
import { hotelController } from "../controllers/hotel.controller.js";

export const router = express.Router();

//Liste de tous les clients de l'hôtel :
router.get("/clients", hotelController.getHotelClients());
//Récupération des informations d'un client spécifique :
router.get("/clients/:id", hotelController.getClientById());
//Ajout d'un nouveau client :
router.post("/clients", hotelController.createClient());
//Modification des informations d'un client :
router.put("/clients/:id", hotelController.updateClient());
//Réservation d'une chambre pour un client :
router.post("/reservation/:roomId", hotelController.createClientReservation());
//Annulation de la réservation d'un client :
router.delete("/reservation/:roomId", hotelController.deleteClientReservation());

