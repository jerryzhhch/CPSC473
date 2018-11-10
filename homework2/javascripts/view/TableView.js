
test = ( function () {

	function TableView(data) {
        this.s_obj = data;
        this.grades = this.s_obj.getCourses();
        this.student = this.s_obj.getFullName();
        this.createTable();
       
	}
            
    TableView.prototype.createTable = function() 
    {
        document.getElementById("grade_report").innerHTML = "Grade For " + this.student;
        document.getElementById("grade_table_id").innerHTML = "<tr><th>Course</th><th>GPA</th></tr>";
        for (i = 0; i < this.grades.length; i++) {
            var table = document.getElementById("grade_table_id");
            var newRow = table.insertRow(1);
            var courseCell = newRow.insertCell(0);
            var gradeCell = newRow.insertCell(1);
            var cn = document.createTextNode(this.grades[i].getCourseName());
            var gpa = document.createTextNode(this.grades[i].getGPA());
            courseCell.appendChild(cn);
            gradeCell.appendChild(gpa);          
        }
    }


	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {}; 
	}
	
    window.testApp.view.TableView = TableView; 
	
	return window.testApp; 
})(); 