describe("", function () {

    it("Create an array with the elements 'foo', 'bar' and 'baz' and save it to the variable 'categories'.", function () {
        expect(window.categories).toContain("foo");
        expect(window.categories).toContain("bar");
        expect(window.categories).toContain("baz");
    });

    it("Append the number '42' to the categories array.", function () {
        if (window.categories.length === 4) {
            expect((typeof window.categories[3]).toLocaleLowerCase()).toBe("number");
            expect(window.categories[3]).toBe(42);
        } else {
            expect((typeof window.categories[4]).toLocaleLowerCase()).toBe("number");
            expect(window.categories[4]).toBe(42);
        }

    });

    it("Prepend the boolean entry 'false' to the categories-array.", function () {
        expect(window.categories[0] === false).toBe(true);
    });

    it("Create a shallow copy of the categories array and save it in a variable named 'catCopy'.", function () {
        expect(window.catCopy instanceof Array).toBe(true);
        expect(window.catCopy !== window.categories).toBe(true);
        expect(window.catCopy[0] === true || window.catCopy[0] === false).toBe(true);
        expect(window.catCopy[1]).toBe("foo");
        expect(window.catCopy[2]).toBe("bar");
        expect(window.catCopy[3]).toBe("baz");
        expect((typeof window.categories[4]).toLocaleLowerCase()).toBe("number");
    });


    it("Create an array named 'numbers' and initialize it with the numbers 1,2,3,4.", function () {
        expect(window.numbers instanceof Array).toBe(true);
        expect(window.numbers[0]).toBe(1);
        expect(window.numbers[1]).toBe(2);
        expect(window.numbers[2]).toBe(3);
        expect(window.numbers[3]).toBe(4);
    });

    it("Loop over the 'numbers' array and calculate the sum of its values. The sum is saved in the variable 'sum'", function () {
        expect(window.sum).toBe(10);
    });
});
