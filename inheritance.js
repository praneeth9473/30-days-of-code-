class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
  constructor(firstname, lastname, id, scores) {
    super(firstname, lastname, id);
    this.scores = scores;
  }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
  calculate() {
    var sum = this.scores.reduce((acc, num) => {
      acc += num;
      return acc;
    });
    var avg = sum / this.scores.length;
    
    if (avg >= 90) {
      return "O";
    }
    else if (avg >= 80) {
      return "E";
    }
    else if (avg >= 70) {
      return "A";
    }
    else if (avg >= 55) {
      return "P";
    }
    else if (avg >= 40) {
      return "D";
    }
    else {
      return "T";
    }
  }
    


}
