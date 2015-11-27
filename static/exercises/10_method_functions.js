describe("", function () {
    it("Create an object 'customer' with the properties 'firstName' (string), 'lastName' (string) and 'age' (number)", function () {
        expect((typeof window.customer).toLowerCase()).toBe("object");
        expect((typeof window.customer.firstName).toLowerCase()).toBe("string");
        expect((typeof window.customer.lastName).toLowerCase()).toBe("string");
        expect((typeof window.customer.age).toLowerCase()).toBe("number");
    });


    it("Add a method 'customerToString' to your customer object. The method returns firstName, lastName and age as a comma-separated string", function () {
        var customer = window.customer;
        expect(customer.customerToString().trim()).toBe(customer.firstName + "," + customer.lastName + "," + customer.age);
    });


    it("Extract the toString-method function from the customer-object so that it can be reused", function () {
        expect(!!window.customerToString).toBe(true);
        expect(window.customerToString()).toBe("undefined,undefined,undefined");
    });


    it("Create another object 'anotherCustomer' that also uses the customerToString()-function as a method", function () {
        var customer = window.anotherCustomer;
        expect(customer.customerToString().trim()).toBe(customer.firstName + "," + customer.lastName + "," + customer.age);
    });

});
