import { rest } from "msw";

const API_URL = "https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products?";

export const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: [
          {
            id: "123",
            fields: {
              name: "Nowy produkt",
              price: 123,
              description: "opis produktu",
            },
          },
        ],
      })

      // ctx.status(200),
      // ctx.json({})

      // ctx.status(500),
      // ctx.json({})
    );
  }),

  // rest.post('/login', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   )
  // }),
];
