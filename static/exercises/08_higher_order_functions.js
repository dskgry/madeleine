describe("", function () {
    it("Create a function 'add(a, b)' that returns the sum of its TWO arguments (again).", function () {
      expect(window.add(1, 2)).toBe(3);
    });

    it("Create a function 'addTwo(a)' that adds 2 to its ONE argument based on 'add'", function() {
        if (!window.createAdder) {
          expect(window.addTwo(1)).toBe(3);
        } else {
          expect(true).toBe(true);
        }
    });

    it("Create a function 'createAdder(n)' returns a function that adds n to its ONE argument", function() {
        expect(window.createAdder(2)(1)).toBe(3);
    });

    it("Implement 'addTwo(a)' by using the 'createAdder' function.", function() {
        expect(window.addTwo.toString()).toEqual(window.createAdder(2).toString());
    });
});
