describe("", function () {
    it("Create a Person constructor that takes firstName and lastName as parameters and saves them as properties.", function() {
      var lars = new Person("Lars", "Kölpin");

      expect(lars.firstName).toBe("Lars");
      expect(lars.lastName).toBe("Kölpin");
    });

    it("Add a method toString to the Person constructor's prototype. The method should return the person's full name", function() {
      var lars = new Person("Lars", "Kölpin");

      expect(lars.toString()).toBe("Lars Kölpin");
    });

    it("Add an new parameter age to the Person contructor. Add a method getAge that returns the person's age. Don't add an age property!", function() {
      var lars = new Person("Lars", "Kölpin", 21);

      expect(Object.keys(lars).length).toBe(3);
      expect(lars.getAge()).toBe(21);
    });

    it("Create a Student constructor that extends Person. It should accept the same parameter like the Person constructor.", function() {
      var studentLars = new Student("Lars", "Kölpin", 21);

      expect(studentLars.firstName).toBe("Lars");
      expect(studentLars.lastName).toBe("Kölpin");
      expect(studentLars.getAge()).toBe(21);
      expect(studentLars instanceof Person);
    });
});
