describe("", function () {
    it("Create a variable 'water' and initialize it with a number", function () {
        if (window.water !== "chateau") {
            expect((typeof window.water).toLowerCase()).toBe("number");
        } else {
            expect(true).toBe(true);
        }
    });
    it("Create a function named 'waterToWine'", function () {
        expect((typeof window.waterToWine).toLowerCase()).toBe("function");
    });

    it("Give the function waterToWine a parameter named 'whatWine'", function () {
        expect(window.waterToWine.toString().trim().indexOf("function waterToWine(whatWine)")).toBe(0);
    });

    it("The function 'waterToWine' overrides the variable 'water' with the parameter you passed.", function () {
        var oldWaterValue = window.water;
        window.waterToWine("rose");
        expect(window.water).toBe("rose");
        window.water = oldWaterValue;
    });
    it("Call the function 'waterToWine' with the string parameter 'chateau'.", function () {
        expect(window.water).toBe("chateau");
    });
});