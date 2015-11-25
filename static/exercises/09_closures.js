describe("", function () {
    it("Create a function `counter` that increments its return value on each call (starting with 1). Use a global variable to track the counter.", function () {
      expect(window.counter()).toBe(1);
      expect(window.counter()).toBe(2);
      expect(window.counter()).toBe(3);
    });

    it("Create a function `makeCounter` that creates a function that increments its return value on each call (starting with 1). Don't use any global variable.", function () {
      var counter = window.makeCounter();

      expect(counter()).toBe(1);
      expect(counter()).toBe(2);
      expect(counter()).toBe(3);
    });
});
