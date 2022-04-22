import 'regenerator-runtime/runtime';
import {getGeoLocation} from "../src/server/geoNamesAPI";

describe ("Testing geonames api call", () => {
  it("Testing getGeoLocation function", async () => {
    const expectedData = ["lng", "lat", "country"];
    const location = await getGeoLocation("Paris");
    console.log(location);
    expectedData.forEach((attribute) => expect(location).toHaveProperty(attribute));
  })
});
