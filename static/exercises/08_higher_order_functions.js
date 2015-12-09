describe("", function () {


    it("Create an array 'numbers' with the entries 1,2,3,4", function () {
        expect(window.numbers instanceof Array).toBe(true);
        expect(window.numbers[0]).toBe(1);
        expect(window.numbers[1]).toBe(2);
        expect(window.numbers[2]).toBe(3);
        expect(window.numbers[3]).toBe(4);
    });

    it("Filter all even numbers and save the result in an array called 'evenNumbers'", function () {
        expect(window.evenNumbers instanceof Array).toBe(true);
        expect(window.evenNumbers[0]).toBe(2);
        expect(window.evenNumbers[1]).toBe(4);
    });

    it("Map the eventNumbers-Array so that the numbers 2 and 4 are transformed to the strings 'TWO' and 'FOUR'. Save the result in an array called" +
        " 'stringNumbers'", function () {
        expect(window.stringNumbers instanceof Array).toBe(true);
        expect(window.stringNumbers[0]).toBe("TWO");
        expect(window.stringNumbers[1]).toBe("FOUR");
    });

    it("Reduce the stringNumbers-Array to a single string (TWOFOUR). Save the result in a variable called 'stringResult'", function () {
        expect(window.stringResult).toBe("TWOFOUR");
    });


  /*  it("Create a function 'createAdder(n)' that returns a function that adds n to its ONE argument", function () {
        expect(window.createAdder(2)(1)).toBe(3);
    });   */


});
