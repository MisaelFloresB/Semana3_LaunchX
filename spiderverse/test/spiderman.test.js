// const spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
    test('Create a spiderman object', () => {
      const andrewGarfield = new spiderman("Amazing Spiderman", "31", "Andrew Garfield", "2", "Sony studios")
      expect(andrewGarfield.name).toBe("Amazing Spiderman");
      expect(andrewGarfield.age).toBe("32");
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe("2");
      expect(andrewGarfield.cinemaStudio).toBe("Sony studios");
    });
  })