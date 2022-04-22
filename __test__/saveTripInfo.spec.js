import 'regenerator-runtime/runtime';
import { handleSaveTrip } from "../src/client/js/saveTripInfo";

describe ("Testing submit functionality", () => {
  it("Testing handleSaveTrip function", done => {
    try {
      expect(handleSaveTrip).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  })
});