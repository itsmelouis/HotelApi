# HotelApi

Ce projet est une API CRUD pour un projet scolaire dans le but de créer une API pour un hôtel factice

## Installation

```bash
npm i
```

## Démarrer l'application

```bash
nodemon index.js
```

L'application démarre par défaut sur le port 3000 : http://localhost:3000

# CRUD API

L'api HotelApi et ses endpoints sont décrites ci-dessous:

## /hotel/...

<details>
<summary> Endpoints pour les employés de l'hôtel </summary>

## Obtenir tous les clients

### Request

`GET /clients`

    curl -i -H 'Accept: application/json' http://localhost:3000/hotel/clients

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    [...]

## Obtenir un client spécifique

### Request

`GET /clients/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/hotel/clients/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "+1-555-555-5555"
    },

## Créer un nouveau client

### Request

`POST /clients/`

    curl -X POST -i -H 'Accept: application/json' -d '{"name": "John","email": "johnd@example.com","phone": "+1-555-555-5555"}' http://localhost:3000/hotel/clients

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "name": "John",
    "email": "johnd@example.com",
    "phone": "+1-555-555-5555",
    "id": 12
    }

## Mettre à jour un client

### Request

`PUT /clients/:id`

    curl -i -H 'Accept: application/json' -d {
      "name": "John1",
      "email": "john1@example.com",
      "phone": "+1-555-555-5555"
    } -X PUT http://localhost:3000/hotel/clients/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "id": 1,
    "name": "John1",
    "email": "john1@example.com",
    "phone": "+1-555-555-5555"
    }

## Créer une réservation

### Request

`POST /reservation/:roomId`

    curl -X POST -i -H 'Accept: application/json' http://localhost:3000/hotel/reservation/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "message": "Reservation created for Standard Room"
    }

## Annuler une réservation

### Request

`DELETE /reservation/:roomId`

    curl -X DELETE -i -H 'Accept: application/json' http://localhost:3000/hotel/reservation/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "message": "Successfully deleted reservation for this room id: 1"
    }

</details>

## /clients/...

<details>
<summary> Endpoints pour les clients de l'hôtel </summary>

## Obtenir tous les clients

### Request

`GET /hotel`

    curl -i -H 'Accept: application/json' http://localhost:3000/clients/hotel

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "name": "Grand Hotel",
    "location": {
        "address": "123 Main Street",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345",
        "country": "USA"
    },
    "contact": {
        "phone": "+1-555-555-5555",
        "email": "info@grandhotel.com"
    },
    "facilities": [
        "Restaurant",
        "Swimming pool",
        "Gym",
        "Spa"
    ],
    "numberOfRooms": 12
    }

## Obtenir toutes les chambres de l'hôtel

### Request

`GET /hotel/rooms`

    curl -i -H 'Accept: application/json' http://localhost:3000/clients/hotel/chambres

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    [...]

## Obtenir une chambre spécifique

### Request

`GET /hotel/chambres/:roomId`

    curl -i -H 'Accept: application/json' http://localhost:3000/clientd/hotel/chambres/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "id": 1,
    "number": 101,
    "name": "Standard Room",
    "description": "A comfortable room with one king size bed and a private bathroom.",
    "capacity": 2,
    "price": 100
    }

## Créer une réservation

### Request

`POST /reservation/:roomId`

    curl -X POST -i -H 'Accept: application/json' http://localhost:3000/hotel/reservation/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "message": "Reservation created for Standard Room"
    }

## Annuler une réservation

### Request

`DELETE /reservation/:roomId`

    curl -X DELETE -i -H 'Accept: application/json' http://localhost:3000/hotel/reservation/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 1 Jan 2024 12:00:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: ...

    {
    "message": "Successfully deleted reservation for this room id: 1"
    }

</details>

## Postman

Vous pouvez utiliser [Postman](https://www.postman.com/downloads/) pour simuler les requêtes HTTP.
