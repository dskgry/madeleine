describe("", function () {
    it("Create an empty object and it save to the variable 'customer'.", function () {
        expect(typeof window.customer).not.toBe("undefined");
    });

    it("Set the firstName of you customer to 'Lars' on creation.", function () {
        expect(window.customer.firstName).toBe("Lars");
    });

    it("Set the lastName of you customer to 'Kölpin' after creation.", function () {
        expect(window.customer.lastName).toBe("Kölpin");
    });

    it("Create a variable 'fullName' that contains the customer's full name", function () {
        expect(window.fullName).toBe("Lars Kölpin");
    });
});
