describe("", function () {
    it("Create an object 'person' with the properties 'firstName' (string), 'lastName' (string) and 'age' (number) and a method-function toString which" +
        " returns all properties comma-separated", function () {
        var person = window.person;
        expect((typeof person).toLowerCase()).toBe("object");
        expect((typeof person.firstName).toLowerCase()).toBe("string");
        expect((typeof person.lastName).toLowerCase()).toBe("string");
        expect((typeof person.age).toLowerCase()).toBe("number");
        expect(person.toString()).toBe(person.firstName + "," + person.lastName + "," + person.age);
    });

    it("Create an object 'customer' which extends person", function () {
        var person = window.person;
        var customer = window.customer;
        expect((typeof customer).toLowerCase()).toBe("object");
        expect(person.isPrototypeOf(customer)).toBe(true);
    });

    it("Add a string-property 'customerNo' to your customer object. Change the age of the customer to 100", function () {
        var customer = window.customer;
        expect((typeof customer.customerNo).toLowerCase()).toBe("string");
        expect(customer.age).toBe(100);
    });

    it("Override the toString-Method of the customer so that it only returns the customerNo", function () {
        var customer = window.customer;
        expect(customer.toString()).toBe(customer.customerNo);
    });

    it("Create a function 'isParentOf(parent, child)' that returns true if the child inherits from the parent (use isPrototypeOf)", function () {
        var objA = {};
        var objB = Object.create(objA);
        expect(window.isParentOf(objA, objB)).toBe(true);
        expect(window.isParentOf(objB, objA)).toBe(false);
    });


});
