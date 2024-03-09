const parser = require("./index");

describe("URL Parser Exercise", () => {
  it(`Should parse URL`, () => {
    const urlString = "/6/api/listings/3?sort=desc&limit=10";
    const result = {
      version: 6,
      collection: "listings",
      id: 3,
      sort: "desc",
      limit: 10,
    };
    expect(parser(urlString)).toStrictEqual(result);
  });
});
