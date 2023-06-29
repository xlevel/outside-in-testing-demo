const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);

describe("GET /user", function () {
  it("Gets the test endpoint", async () => {

    const response = await request.get("/");

    expect(response.status).toBe(200);

    expect(response.body.title).toBe('pass!');
    // expect(response.body.title).toBe('Hello, world!');
  });
});
