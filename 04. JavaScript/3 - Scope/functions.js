(function () {
	/* IIFE*/
	
	function testScope(){
		console.log(test);
		var test = "I'm local";
		console.log(test)
	}
	var test = "I'm Global";
	testScope();

})();