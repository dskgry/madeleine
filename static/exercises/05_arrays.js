describe("", function () {
    it("Create an empty array and it save to the variable 'categories'.", function () {
        expect(window.categories instanceof Array).toBe(true);
    });

    it("Create an array with categories 'foo', 'bar' and 'baz' as entries (again, save it to the variable 'categories').", function () {
        expect(window.categories).toContain("foo");
        expect(window.categories).toContain("bar");
        expect(window.categories).toContain("baz");
    });

    it("Add 4th entry named 'foo' to the categories array.", function () {
      expect(window.categories[3]).toBe("foo");
    });

    it("Delete the 1st entry from the categories array (it's the same the 4th, anyway).", function () {
      if (window.categories[3] === "foo") {
        expect(window.categories[0]).toBe(undefined);
      }
    });

    it("Create a variable `categoriesString` that contains comma-separated string of all categories.", function () {
      expect(window.categoriesString.replace(" ", "")).toBe("bar,baz,foo");
    });
});
