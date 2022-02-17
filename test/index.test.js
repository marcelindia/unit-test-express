const sut = require("../src/index");
const supertest = require("supertest");
const request = supertest(sut);

describe("Verifies all the endpoints", () => {
  it("should return hello", async () => {
    //Arrange
    const request = supertest(sut);
    const expectedResult = "Hello";
    //Act
    const result = await request.get("/");
    const actualResult = result.text;
    //Assert
    expect(actualResult).toBe(expectedResult);
  });
});
