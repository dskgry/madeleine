describe("", function () {
    it("Create an empty object and it save to the variable 'customer'.", function () {
        expect(typeof window.customer).not.toBe("undefined");
    });

    it("Add a property 'name' to your customer object. Set the name to 'Lars Kölpin'.", function () {
        expect(window.customer.name).toBe("Lars Kölpin");
    });

    it("Add a property 'address' to your customer object and assign an object with the properties 'street' and 'streetNumber' to it. Street must be a string," +
        " streetNumber a number", function () {
        expect((typeof window.customer.address).toLocaleLowerCase()).toBe("object");
        expect((typeof window.customer.address.street).toLocaleLowerCase()).toBe("string");
        expect((typeof window.customer.address.streetNumber).toLocaleLowerCase()).toBe("number");
    });

    it("Prevent the customer object from being changed (no new properties allowed, values not allowed to be changed)", function () {
        window.customer.test = true;
        window.customer.name = "Test";
        expect(window.customer.test).toBe(undefined);
        expect(window.customer.name).toBe("Lars Kölpin");
    });

});
