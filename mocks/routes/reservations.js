const RESERVATIONS = [
  {
    id: 1,
    code: 'QWERTY',
    status: "BOOKED",
    passengers: [
      {
        id: 1,
        firstname: "John",
        lastname: "Doe"
      }
    ],
    trip: {
      details: {
        origin: "SCL",
        destination: "LIM",
        departure: "2020-01-01T04:00:00"
      },
      outbound: {
        flights: [
          {
            number: 32,
            carrier: "LA",
            origin: "SCL",
            destination: "LIM",
            departure: "2020-01-01T04:00:00"
          }
        ]
      }
    }
  },
  {
    id: 2,
    code: 'ABCDEF',
    status: "CANCELLED",
    passengers: [
      {
        id: 1,
        firstname: "John",
        lastname: "Doe"
      },
      {
        id: 2,
        firstname: "Jane",
        lastname: "Doe"
      },
      {
        id: 3,
        firstname: "Adam",
        lastname: "Smith"
      }
    ],
    trip: {
      details: {
        origin: "PMC",
        destination: "SCL",
        departure: "2020-01-01T04:00:00"
      },
      outbound: {
        flights: [
          {
            number: 32,
            carrier: "LA",
            origin: "PMC",
            destination: "SCL",
            departure: "2020-01-01T04:00:00"
          }
        ]
      }
    }
  }
];

module.exports = [
  {
    id: "get-reservations", // id of the route
    url: "/api/reservations", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: RESERVATIONS, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-reservation", // id of the route
    url: "/api/reservations/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: RESERVATIONS[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const id = req.params.id;
          const reserv = RESERVATIONS.find((reservData) => reservData.id === Number(id));
          if (reserv) {
            res.status(200);
            res.send(reserv);
          } else {
            res.status(404);
            res.send({
              message: "Reservation not found",
            });
          }
        },
      },
    ],
  },
  {
    id: "get-reservation-bycode", // id of the route
    url: "/api/reservations/code/:code", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: RESERVATIONS[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const code = req.params.code;
          const reserv = RESERVATIONS.find((reservData) => reservData.code === code);
          if (reserv) {
            res.status(200);
            res.send(reserv);
          } else {
            res.status(404);
            res.send({
              message: "Reservation not found",
            });
          }
        },
      },
    ],
  }
];