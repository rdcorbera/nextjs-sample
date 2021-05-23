const { delLocale } = require("next/dist/next-server/lib/router/router");

const RESERVATIONS = [
  {
    id: 1,
    status: "BOOKED",
    passengers: [
      {
        firstname: "John",
        lastname: "Doe"
      }
    ],
    trip: {
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
  }
];