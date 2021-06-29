const DOCUMENTATION = [
  {
    reservationId: 1,
    fields: [
      {
        key: "EMAIL"
      },
      {
        key: "PHONE"
      }
    ],
    passengers: [
      {
        id: 1,
        status: "PENDING"
      }
    ]
  },
  {
    reservationId: 2,
    fields: [
      {
        key: "DOCUMENT_ID"
      },
      {
        key: "EMAIL"
      },
      {
        key: "PHONE"
      },
      {
        key: "NATIONALITY"
      }
    ],
    passengers: [
      {
        id: 1,
        status: "COMPLETED"
      },
      {
        id: 2,
        status: "PENDING"
      },
      {
        id: 3,
        status: "PENDING"
      }
    ]
  }
]

module.exports = [
  {
    id: "get-documentation", // id of the route
    url: "/api/documentation/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: DOCUMENTATION[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const id = req.params.id;
          const docs = DOCUMENTATION.find((docs) => docs.reservationId === Number(id));
          if (docs) {
            res.status(200);
            res.send(docs);
          } else {
            res.status(404);
            res.send({
              message: "Documentation not found",
            });
          }
        },
      },
    ],
  },
]