describe("", function () {
    it("Create an empty array and it save to the variable 'emptyArray'.", function () {
        expect(window.emptyArray instanceof Array).toBe(true);
    });

    it("Create an array with the elements 'foo', 'bar' and 'baz' and save it to the variable 'categories'.", function () {
        expect(window.categories).toContain("foo");
        expect(window.categories).toContain("bar");
        expect(window.categories).toContain("baz");
    });

    it("Append a number to the categories-array.", function () {
        if (window.categories.length === 4) {
            expect((typeof window.categories[3]).toLocaleLowerCase()).toBe("number");
        } else {
            expect((typeof window.categories[4]).toLocaleLowerCase()).toBe("number");
        }

    });

    it("Prepend a boolean entry to the categories-array.", function () {
        expect(window.categories[0] === true || window.categories[0] === false).toBe(true);
    });

    it("Create a copy of the categories-array and save it in a variable named 'catCopy'.", function () {
        expect(window.catCopy instanceof Array).toBe(true);
        expect(window.catCopy[0] === true || window.catCopy[0] === false).toBe(true);
        expect(window.catCopy[1]).toBe("foo");
        expect(window.catCopy[2]).toBe("bar");
        expect(window.catCopy[3]).toBe("baz");
        expect((typeof window.categories[4]).toLocaleLowerCase()).toBe("number");
    });


    it("Create a variable `categoriesString` that contains comma-separated string of all categories.", function () {
        expect(window.categoriesString.replace(" ", "")).toBe("bar,baz,foo");
    });
});
