
test = (function() {
  
    // COURSE class
    function Course(cn, grade) {
      this.course_name = cn;
      this.GPA = grade;
      this.getCourseName();
      this.getGPA();
    }
    
Course.prototype.getCourseName = function() {
  return this.course_name;
}

Course.prototype.getGPA = function() {
  return this.GPA;
}


    window.testApp.model.Course = Course; 
	return window.testApp;
  })();
  
  