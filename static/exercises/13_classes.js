describe("", function () {
    it("Create a Person-class. Its constructor takes 'firstName' and 'lastName' as parameters and save these parameters as properties.", function() {
      var lars = new Person("Lars", "Kölpin");

      expect(lars.firstName).toBe("Lars");
      expect(lars.lastName).toBe("Kölpin");
    });

    it("Add a method 'toString' to the Person-class. The method should return the persons' full name (space separated)", function() {
      var lars = new Person("Lars", "Kölpin");

      expect(lars.toString()).toBe("Lars Kölpin");
    });

    it("Create a Student-class that extends the Person-class. The Students' constructor should accept the same params the Person does.", function() {
      var studentLars = new Student("Lars", "Kölpin");

      expect(studentLars.firstName).toBe("Lars");
      expect(studentLars.lastName).toBe("Kölpin");
    });

    it("Overwrite the 'toString' method by prepending the string 'Student_'. Reuse the super classes' 'toString' method.", function() {
      var studentLars = new Student("Lars", "Kölpin");

      expect(studentLars.toString()).toBe("Student_Lars Kölpin");
    })

    it("Add a constructor that accepts an additional third parameter called 'age'. Add a method 'getAge' that returns the students' age.", function() {
      var studentLars = new Student("Lars", "Kölpin", 21);

      expect(studentLars.toString()).toBe("Student Lars Kölpin");
      expect(studentLars.getAge()).toBe(21);
    })
});
