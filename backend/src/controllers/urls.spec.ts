const request = require("supertest");
const url = "http://localhost:3000";

describe("Url Endpoints", () => {
  it("should shorten an url", async () => {
    const body = {
      longUrl: "http://mytest.com",
    };

    const res = await request(url).post("/shorten").send(body);

    expect(res.statusCode).toEqual(200);
    expect(res.body.shortUrl).toMatch(/pbid.io/);
    expect(res.body.urlCode.length).toBe(8);
  });

  it("should return invalid long Url", async () => {
    const body = {
      longUrl: "invalidurl",
    };
    const res = await request(url).post("/shorten").send(body);

    expect(res.statusCode).toEqual(401);
  });

  it("should show a list", async () => {
    const res = await request(url).get("/list");

    expect(res.statusCode).toEqual(200);
  });
});
