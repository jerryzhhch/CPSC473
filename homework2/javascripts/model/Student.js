test = (function() {
	var student_set = new Array();
	
	function Student(fn, ln, cl) {
		this.first_name = fn;
		this.last_name = ln;
		this.course_list = cl;
	}

    // return student first name
    Student.prototype.getFirstName = function () {
        return this.first_name;
    }

    // return student last name
    Student.prototype.getLastName = function () {
        return this.last_name;
    }

	// return student full name
	Student.prototype.getFullName = function() {
		return this.first_name + " " + this.last_name; 
	}
	
    // return course list
    Student.prototype.getCourses = function () {
        return this.course_list;
    }
	
	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {}; 
	}
	
	window.testApp.model.Student = Student; 
	
	return window.testApp; 	
})();


test = (function () {
    var course_set = new Array();

    function Course(cn, gpa) {
        this.course_name = cn;
        this.GPA = gpa;
    }

    // return the list of Student objects created
    Course.prototype.getAllCourses = function () {
        return course_set;
    }

    if (window.testApp == undefined) {
        window.testApp = {};
    }

    if (window.testApp.model == undefined) {
        window.testApp.model = {};
    }

    window.testApp.model.Course = Course;

    return window.testApp;
})();