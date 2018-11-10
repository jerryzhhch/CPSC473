
test = ( function () {

	function ListView(data) {
        var ul_node = document.getElementById('student_list_id');
        this.root = ul_node;
		this.content = data; 
		this.createChildNodeDOMApi();
	}

	ListView.prototype.createChildNodeDOMApi = function() {
		// empty child nodes
		while (this.root.firstChild) {
			this.root.removeChild(this.root.firstChild); 
		}
		//
		for (i=0; i<this.content.length; i++) {
			var li_node = document.createElement('li');
            var li_content = document.createTextNode(this.content[i].getFullName());
			li_node.appendChild(li_content);
			this.root.appendChild(li_node);  
		}	
	}
			
	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {}; 
	}
	
	window.testApp.view.ListView = ListView; 
	
	return window.testApp; 
})(); 