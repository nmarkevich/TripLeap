import 'regenerator-runtime/runtime';
import {getImage} from "../src/server/pixabayAPI";

describe ("Testing pixabay api call", () => {
  it("Testing getImage function", async () => {
    const imgLink = await getImage("Paris");
    expect(imgLink).not.toBeNull();
  })
});