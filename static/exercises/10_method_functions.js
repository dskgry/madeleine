describe("", function () {
    it("Create an object 'customer' with the properties 'firstName' (string), 'lastName' (string) and 'age' (number)", function () {
        expect((typeof window.customer).toLowerCase()).toBe("object");
        expect((typeof window.customer.firstName).toLowerCase()).toBe("string");
        expect((typeof window.customer.lastName).toLowerCase()).toBe("string");
        expect((typeof window.customer.age).toLowerCase()).toBe("number");
    });


    it("Add a method 'customerToString' to your customer object. The method returns firstName, lastName and age as a comma-separated string", function () {
        var customer = window.customer;
        expect(customer.customerToString().replace(/ /g, "")).toBe((customer.firstName + "," + customer.lastName + "," + customer.age).replace(/ /g, ""));
    });


    it("Extract the 'customerToString' function from the customer-object so that it can be reused. (Make the function 'global')", function () {
        expect(!!window.customerToString).toBe(true);
        expect(window.customerToString().replace(/ /g, "")).toBe("undefined,undefined,undefined");
    });


 /*   it("Create another object 'anotherCustomer' that also uses the customerToString()-function as a method", function () {
        var customer = window.anotherCustomer;
        expect(customer.customerToString().replace(/ /g, "")).toBe((customer.firstName + "," + customer.lastName + "," + customer.age).replace(/ /g, ""));
    });      */

});
