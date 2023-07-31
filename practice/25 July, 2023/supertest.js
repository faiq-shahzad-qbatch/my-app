// test.js

const request = require("supertest");
const app = require("./server");

describe("GET /api/greet", () => {
  it('should return "Hello, World!"', (done) => {
    request(app)
      .get("/api/greet")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.message).toEqual("Hello, World!");
        done();
      });
  });
});
