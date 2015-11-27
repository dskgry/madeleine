describe("", function () {

    it("Create a variable 'water' and initialize it with a number", function () {
        if (window.water !== "wine") {
            expect((typeof window.water).toLowerCase()).toBe("number");
        } else {
            expect(true).toBe(true);
        }
    });

    it("Change the value of the variable 'water' to 'wine'", function () {
        expect(window.water).toBe("wine");
    });

    it("Create a variable 'stringToNumber' and assign a string value", function () {
        if ((typeof window.stringToNumber).toLowerCase() !== "number") {
            expect((typeof window.stringToNumber).toLowerCase()).toBe("string");
        } else {
            expect(true).toBe(true);
        }
    });

    it("Turn the variable 'stringToNumber' into a number by multiplying with an integer", function () {
        if ((typeof window.stringToNumber).toLowerCase() === "string") {
            expect((typeof window.stringToNumber).toLowerCase()).toBe("number");
        } else {
            expect(true).toBe(true);
        }
    });

    it("Create a variable 'hello' and assign the string 'Hello World' to it.", function () {
        expect((typeof window.hello).toLowerCase()).toBe("string");
    });

    it("Use the method toUpperCase to make 'hello' uppercase. ", function () {
        expect(window.hello).toBe("HELLO WORLD");
    });


    it("Create a floating point number variable named 'floating'", function () {
        expect((typeof window.floating).toLowerCase()).toBe("number");
        expect((window.floating + "").indexOf(".") > -1).toBe(true);
    });

    it("Add at least 3 fractional digits to your 'floating' variable", function () {
        expect((typeof window.floating).toLowerCase()).toBe("number");
        expect((window.floating + "").indexOf(".") > -1).toBe(true);
        expect((window.floating + "").split(".")[1].length > 2).toBe(true);
    });

    it("Create a variable 'rounded' which holds the value of 'floating' rounded to one fractional digit. (use the method toPrecision)", function () {
        expect((typeof window.rounded).toLowerCase()).toBe("string");
        expect((window.rounded + "").indexOf(".") > -1).toBe(true);
        expect((window.rounded + "").split(".")[1].length === 1).toBe(true);
    });


});
