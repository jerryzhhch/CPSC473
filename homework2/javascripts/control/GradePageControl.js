var showGrade = (function () {
    function GradeControl() {
        var elm = document.getElementById('student_list_id');

        function getEventTarget(e) {
            e = e || window.event;
            return e.target || e.srcElement; 
        }

        elm.addEventListener('click',function(event){
           //console.log('item selected');
           var target = getEventTarget(event).textContent.toLowerCase();
           var student;
           for (i = 0; i<student_list.length; i++) {
                if(target == student_list[i].getFullName().toLowerCase()) {
                    student = student_list[i];
                }
           }

           // Create the view 
           var table_view = new test.view.TableView(student);
        });
    }
    
    window.addEventListener('load', function(event) {
        GradeControl();
	}); 
	return showGrade;
})();



