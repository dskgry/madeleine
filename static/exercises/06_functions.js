describe("", function () {
    it("Create a function 'me' that returns your name.", function () {
        expect(typeof window.me()).toBe("string");
    });

    it("Create a function 'add' that returns the sum of its TWO arguments.", function () {
        if (!window.addAll) {
          expect(window.add(1, 2)).toBe(3);
        } else {
          expect(true).toBe(true);
        }
    });

    it("Create a function 'addAll' that it returns the sum of ALL its arguments.", function () {
        expect(window.addAll(1, 2, 3, 4, 5)).toBe(15);
    });

    it("Replace 'add' by 'addAll'. Remove the 'add' function and assign 'addAll' to the variable 'add'", function () {
        expect(window.add).toBe(window.addAll);
    });
});
