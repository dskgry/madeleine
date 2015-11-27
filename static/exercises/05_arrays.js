describe("", function () {
    it("Create an empty array and it save to the variable 'emptyArray'.", function () {
        expect(window.emptyArray instanceof Array).toBe(true);
    });

    it("Create an array with the elements 'foo', 'bar' and 'baz' and save it to the variable 'categories'.", function () {
        expect(window.categories).toContain("foo");
        expect(window.categories).toContain("bar");
        expect(window.categories).toContain("baz");
    });

    it("Append another entry named 'foo' to the array.", function () {
      expect(window.categories[3]).toBe("foo");
    });

    it("Delete the 1st entry from the categories array.", function () {
      if (window.categories[3] === "foo") {
        expect(window.categories[0]).toBe(undefined);
      }
    });

    it("Create a variable `categoriesString` that contains comma-separated string of all categories.", function () {
      expect(window.categoriesString.replace(" ", "")).toBe("bar,baz,foo");
    });
});
