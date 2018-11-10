var searchStudent = (function() {
	function NameListControl() {
		var add_elm = document.getElementById('search_student');
       
		// define the event handler for Search button 
        add_elm.addEventListener('click', function (event) {

			// Get the input and search the Student (model) object list.
            var ln = document.getElementById('ln_id').value;
            var result_list = new Array();
            for (i = 0; i < student_list.length; i++) {
                if (student_list[i].getLastName().toLowerCase() == ln.toLowerCase()) {
                    result_list.push(student_list[i]);
                }
            }
			
            // Create the view 
            var list_view = new test.view.ListView(result_list);            
        });
	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
        NameListControl();
	}); 
	return searchStudent; 
})()


