const request = require("supertest");
const app = require("./app");

const {
  getAllTechnologies,
  getTechnologyById,
} = require("./repositories/technology");

jest.mock("./config/db", () => null);
jest.mock("./repositories/technology");

describe("/GET /api/not-found", () => {
  it("responds with a 404 status code and a Not Found msg", async () => {
    const response = await request(app).get("/api/not-found");
    expect(response.status).toBe(404);
    expect(response.body).toStrictEqual({ data: "Not Found" });
  });
});

describe("/GET /api/technologies", () => {
  it("responds with a 200 status code and an empty array of technologies", async () => {
    getAllTechnologies.mockImplementation(() => []);
    const response = await request(app).get("/api/technologies");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: [] });
  });
});

describe("/GET /api/technologies/:id", () => {
  beforeAll(() => {
    getTechnologyById.mockImplementation((id) => {
      if (id === "valid_id") {
        return {
          name: "JavaScript",
          docs: "http://...",
          learned: false,
        };
      } else {
        throw new Error();
      }
    });
  });

  it("responds with a 404 status code and a Not Found msg if invalid id", async () => {
    const response = await request(app).get("/api/technologies/invalid_id");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ data: "Not Found" });
  });

  it("responds with a 200 status code and technology Object from DB", async () => {
    const response = await request(app).get("/api/technologies/valid_id");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        name: "JavaScript",
        docs: "http://...",
        learned: false,
      },
    });
  });
});
